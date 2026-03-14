const express = require("express");
const router = express.Router();
const { CreateFinance, ReadingData, DeleteFinance, UpdateFinance, ReadSingleData } = require("../controllers/FinanceControllers");

// Create Finance Record
router.post("/create/finance", CreateFinance);

// Read All Finance Records
router.get("/read/Finance", ReadingData);

// Read Single Finance Record
router.get("/read/Finance/:id", ReadSingleData);

// Update Finance Record
router.put("/update/Finance/:id", UpdateFinance);

// Delete Finance Record
router.delete("/delete/Finance/:id", DeleteFinance);

module.exports = router; 