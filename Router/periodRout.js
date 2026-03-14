const express = require('express');
const router = express.Router();
const periodController = require('../controllers/periodControllers');

// Create a new period
router.post('/', periodController.createPeriod);

// Get all periods
router.get('/', periodController.getAllPeriods);

// Get a single period by ID
router.get('/:id', periodController.getPeriodById);

// Update a period by ID
router.put('/:id', periodController.updatePeriod);

// Delete a period by ID
router.delete('/:id', periodController.deletePeriod);

module.exports = router;
