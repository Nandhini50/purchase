const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 10000;

app.use(express.json());

// Load P2P data
const dataPath = path.join(__dirname, "Data.json");

let data;

try {
  data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  console.log("P2P data loaded successfully");
} catch (error) {
  console.error("Failed to load p2pData.json:", error);
  process.exit(1);
}

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "P2P Three-Way Match Workbench API is running",
    status: "success"
  });
});

// Complete P2P data
app.get("/api/data", (req, res) => {
  res.json(data);
});

// Settings
app.get("/api/settings", (req, res) => {
  res.json(data.settings);
});

// Purchase requisitions
app.get("/api/purchase-requisitions", (req, res) => {
  res.json(data.purchaseRequisitions);
});

// Purchase orders
app.get("/api/purchase-orders", (req, res) => {
  res.json(data.purchaseOrders);
});

// Goods receipts
app.get("/api/goods-receipts", (req, res) => {
  res.json(data.goodsReceipts);
});

// Invoices
app.get("/api/invoices", (req, res) => {
  res.json(data.invoices);
});

// Tolerances
app.get("/api/tolerances", (req, res) => {
  res.json(data.tolerances);
});

// Audit log
app.get("/api/audit-log", (req, res) => {
  res.json(data.auditLog);
});

// Three-way match
app.get("/api/match/:poId", (req, res) => {
  const poId = req.params.poId;

  const po = data.purchaseOrders.find(
    item => item.poId === poId
  );

  if (!po) {
    return res.status(404).json({
      error: "Purchase order not found"
    });
  }

  const receipts = data.goodsReceipts.filter(
    item => item.poId === poId && !item.duplicate
  );

  const invoices = data.invoices.filter(
    item => item.poId === poId
  );

  const receiptQty = receipts.reduce(
    (total, item) => total + Number(item.receivedQty || 0),
    0
  );

  const invoice = invoices[0];

  if (!invoice) {
    return res.json({
      poId,
      status: "No Invoice",
      purchaseOrder: po,
      receivedQty: receiptQty
    });
  }

  const tolerance = data.tolerances.find(
    item => item.materialId === po.materialId
  ) || {
    quantityTolerancePercent:
      data.settings.defaultTolerancePercent,
    priceTolerancePercent:
      data.settings.priceTolerancePercent
  };

  const allowedQty =
    po.orderedQty *
    (1 + tolerance.quantityTolerancePercent / 100);

  const minQty =
    po.orderedQty *
    (1 - tolerance.quantityTolerancePercent / 100);

  const allowedPrice =
    po.unitPrice *
    (1 + tolerance.priceTolerancePercent / 100);

  const minPrice =
    po.unitPrice *
    (1 - tolerance.priceTolerancePercent / 100);

  const quantityMatch =
    invoice.invoiceQty >= minQty &&
    invoice.invoiceQty <= allowedQty;

  const priceMatch =
    invoice.unitPrice >= minPrice &&
    invoice.unitPrice <= allowedPrice;

  const supplierMatch =
    invoice.supplier === po.supplier;

  const materialMatch =
    invoice.materialId === po.materialId;

  const duplicateInvoice =
    invoices.filter(
      item =>
        item.invoiceId !== invoice.invoiceId &&
        item.invoiceQty === invoice.invoiceQty &&
        item.unitPrice === invoice.unitPrice
    ).length > 0;

  let status = "Matched";

  if (
    !quantityMatch ||
    !priceMatch ||
    !supplierMatch ||
    !materialMatch ||
    duplicateInvoice
  ) {
    status = "Blocked";
  }

  res.json({
    poId,
    invoiceId: invoice.invoiceId,
    status,

    purchaseOrder: {
      orderedQty: po.orderedQty,
      unitPrice: po.unitPrice,
      supplier: po.supplier,
      materialId: po.materialId
    },

    goodsReceipt: {
      receivedQty: receiptQty,
      receiptCount: receipts.length
    },

    invoice: {
      invoiceQty: invoice.invoiceQty,
      unitPrice: invoice.unitPrice,
      supplier: invoice.supplier,
      materialId: invoice.materialId
    },

    checks: {
      quantityMatch,
      priceMatch,
      supplierMatch,
      materialMatch,
      duplicateInvoice
    },

    tolerance
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`P2P server running on port ${PORT}`);
});
