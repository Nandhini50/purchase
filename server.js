{
  "settings": {
    "defaultTolerancePercent": 5,
    "priceTolerancePercent": 3,
    "earlyPaymentDiscountDays": 10,
    "currency": "INR"
  },

  "purchaseRequisitions": [
    {
      "prId": "PR1001",
      "requester": "Production",
      "material": "Electronic Controller",
      "quantity": 1000,
      "requiredDate": "2026-08-10",
      "status": "Converted to PO"
    },
    {
      "prId": "PR1002",
      "requester": "Maintenance",
      "material": "Industrial Sensor",
      "quantity": 500,
      "requiredDate": "2026-08-12",
      "status": "Converted to PO"
    },
    {
      "prId": "PR1003",
      "requester": "IT",
      "material": "Network Module",
      "quantity": 200,
      "requiredDate": "2026-08-15",
      "status": "Converted to PO"
    }
  ],

  "purchaseOrders": [
    {
      "poId": "PO1001",
      "prId": "PR1001",
      "supplier": "ABC Electronics",
      "supplierId": "SUP001",
      "material": "Electronic Controller",
      "materialId": "MAT001",
      "orderedQty": 1000,
      "unitPrice": 500,
      "currency": "INR",
      "poDate": "2026-08-01",
      "expectedDate": "2026-08-08",
      "status": "Open",
      "contracted": true,
      "paymentTerms": "2% 10 Net 30"
    },
    {
      "poId": "PO1002",
      "prId": "PR1002",
      "supplier": "SensorTech Industries",
      "supplierId": "SUP002",
      "material": "Industrial Sensor",
      "materialId": "MAT002",
      "orderedQty": 500,
      "unitPrice": 1200,
      "currency": "INR",
      "poDate": "2026-08-02",
      "expectedDate": "2026-08-09",
      "status": "Open",
      "contracted": true,
      "paymentTerms": "Net 30"
    },
    {
      "poId": "PO1003",
      "prId": "PR1003",
      "supplier": "NetworkWorks",
      "supplierId": "SUP003",
      "material": "Network Module",
      "materialId": "MAT003",
      "orderedQty": 200,
      "unitPrice": 2500,
      "currency": "INR",
      "poDate": "2026-08-03",
      "expectedDate": "2026-08-10",
      "status": "Open",
      "contracted": false,
      "paymentTerms": "Net 30"
    },
    {
      "poId": "PO1004",
      "prId": "PR1004",
      "supplier": "ABC Electronics",
      "supplierId": "SUP001",
      "material": "Power Supply Unit",
      "materialId": "MAT004",
      "orderedQty": 100,
      "unitPrice": 5000,
      "currency": "INR",
      "poDate": "2026-08-04",
      "expectedDate": "2026-08-07",
      "status": "Closed",
      "contracted": true,
      "paymentTerms": "Net 30"
    },
    {
      "poId": "PO1005",
      "prId": "PR1005",
      "supplier": "Global Components",
      "supplierId": "SUP004",
      "material": "Microcontroller",
      "materialId": "MAT005",
      "orderedQty": 1000,
      "unitPrice": 800,
      "currency": "INR",
      "poDate": "2026-08-05",
      "expectedDate": "2026-08-13",
      "status": "Open",
      "contracted": true,
      "paymentTerms": "2% 10 Net 30"
    },
    {
      "poId": "PO1006",
      "prId": "PR1006",
      "supplier": "Rapid Supplies",
      "supplierId": "SUP005",
      "material": "Relay Module",
      "materialId": "MAT006",
      "orderedQty": 300,
      "unitPrice": 900,
      "currency": "INR",
      "poDate": "2026-08-06",
      "expectedDate": "2026-08-14",
      "status": "Open",
      "contracted": true,
      "paymentTerms": "Net 30"
    },
    {
      "poId": "PO1007",
      "prId": "PR1007",
      "supplier": "Unknown Supplier",
      "supplierId": "SUP999",
      "material": "Connector",
      "materialId": "MAT007",
      "orderedQty": 100,
      "unitPrice": 1000,
      "currency": "INR",
      "poDate": "2026-08-07",
      "expectedDate": "2026-08-15",
      "status": "Open",
      "contracted": false,
      "paymentTerms": "Net 30"
    }
  ],

  "goodsReceipts": [
    {
      "grId": "GR1001",
      "poId": "PO1001",
      "supplier": "ABC Electronics",
      "materialId": "MAT001",
      "receivedQty": 1000,
      "grDate": "2026-08-08",
      "status": "Posted",
      "duplicate": false
    },
    {
      "grId": "GR1002",
      "poId": "PO1002",
      "supplier": "SensorTech Industries",
      "materialId": "MAT002",
      "receivedQty": 460,
      "grDate": "2026-08-09",
      "status": "Posted",
      "duplicate": false
    },
    {
      "grId": "GR1003",
      "poId": "PO1003",
      "supplier": "NetworkWorks",
      "materialId": "MAT003",
      "receivedQty": 220,
      "grDate": "2026-08-11",
      "status": "Posted",
      "duplicate": false
    },
    {
      "grId": "GR1004",
      "poId": "PO1005",
      "supplier": "Global Components",
      "materialId": "MAT005",
      "receivedQty": 700,
      "grDate": "2026-08-13",
      "status": "Posted",
      "duplicate": false
    },
    {
      "grId": "GR1005",
      "poId": "PO1006",
      "supplier": "Rapid Supplies",
      "materialId": "MAT006",
      "receivedQty": 300,
      "grDate": "2026-08-14",
      "status": "Posted",
      "duplicate": false
    },
    {
      "grId": "GR1006",
      "poId": "PO1007",
      "supplier": "Wrong Supplier",
      "materialId": "MAT007",
      "receivedQty": 100,
      "grDate": "2026-08-15",
      "status": "Posted",
      "duplicate": false
    },
    {
      "grId": "GR1007",
      "poId": "PO1001",
      "supplier": "ABC Electronics",
      "materialId": "MAT001",
      "receivedQty": 1000,
      "grDate": "2026-08-08",
      "status": "Posted",
      "duplicate": true
    }
  ],

  "invoices": [
    {
      "invoiceId": "INV1001",
      "poId": "PO1001",
      "supplier": "ABC Electronics",
      "materialId": "MAT001",
      "invoiceQty": 1000,
      "unitPrice": 500,
      "invoiceDate": "2026-08-09",
      "dueDate": "2026-09-08",
      "status": "Matched",
      "ocrConfidence": 0.99
    },
    {
      "invoiceId": "INV1002",
      "poId": "PO1002",
      "supplier": "SensorTech Industries",
      "materialId": "MAT002",
      "invoiceQty": 500,
      "unitPrice": 1200,
      "invoiceDate": "2026-08-10",
      "dueDate": "2026-09-09",
      "status": "Blocked",
      "ocrConfidence": 0.98
    },
    {
      "invoiceId": "INV1003",
      "poId": "PO1003",
      "supplier": "NetworkWorks",
      "materialId": "MAT003",
      "invoiceQty": 220,
      "unitPrice": 2600,
      "invoiceDate": "2026-08-12",
      "dueDate": "2026-09-11",
      "status": "Blocked",
      "ocrConfidence": 0.96
    },
    {
      "invoiceId": "INV1004",
      "poId": "PO1004",
      "supplier": "ABC Electronics",
      "materialId": "MAT004",
      "invoiceQty": 100,
      "unitPrice": 5000,
      "invoiceDate": "2026-08-08",
      "dueDate": "2026-09-07",
      "status": "Blocked",
      "ocrConfidence": 0.97
    },
    {
      "invoiceId": "INV1005",
      "poId": "PO1005",
      "supplier": "Global Components",
      "materialId": "MAT005",
      "invoiceQty": 700,
      "unitPrice": 800,
      "invoiceDate": "2026-08-14",
      "dueDate": "2026-09-13",
      "status": "Blocked",
      "ocrConfidence": 0.72
    },
    {
      "invoiceId": "INV1006",
      "poId": "PO1006",
      "supplier": "Rapid Supplies",
      "materialId": "MAT006",
      "invoiceQty": 300,
      "unitPrice": 900,
      "invoiceDate": "2026-08-15",
      "dueDate": "2026-09-14",
      "status": "Matched",
      "ocrConfidence": 0.99
    },
    {
      "invoiceId": "INV1007",
      "poId": "PO1007",
      "supplier": "Wrong Supplier",
      "materialId": "MAT007",
      "invoiceQty": 100,
      "unitPrice": 1000,
      "invoiceDate": "2026-08-16",
      "dueDate": "2026-09-15",
      "status": "Blocked",
      "ocrConfidence": 0.94
    },
    {
      "invoiceId": "INV1008",
      "poId": "PO1001",
      "supplier": "ABC Electronics",
      "materialId": "MAT001",
      "invoiceQty": 1000,
      "unitPrice": 500,
      "invoiceDate": "2026-08-09",
      "dueDate": "2026-09-08",
      "status": "Blocked",
      "ocrConfidence": 0.99
    }
  ],

  "tolerances": [
    {
      "materialId": "MAT001",
      "quantityTolerancePercent": 5,
      "priceTolerancePercent": 3
    },
    {
      "materialId": "MAT002",
      "quantityTolerancePercent": 5,
      "priceTolerancePercent": 3
    },
    {
      "materialId": "MAT003",
      "quantityTolerancePercent": 5,
      "priceTolerancePercent": 3
    },
    {
      "materialId": "MAT004",
      "quantityTolerancePercent": 5,
      "priceTolerancePercent": 3
    },
    {
      "materialId": "MAT005",
      "quantityTolerancePercent": 5,
      "priceTolerancePercent": 3
    },
    {
      "materialId": "MAT006",
      "quantityTolerancePercent": 5,
      "priceTolerancePercent": 3
    },
    {
      "materialId": "MAT007",
      "quantityTolerancePercent": 5,
      "priceTolerancePercent": 3
    }
  ],

  "auditLog": []
}
