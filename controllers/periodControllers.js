const Period = require('../model/periodModel');

// Create a new period
exports.createPeriod = async (req, res) => {
  try {
    const { periodId, periodName } = req.body;
    const period = new Period({ periodId, periodName });
    await period.save();
    res.status(201).json(period);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all periods
exports.getAllPeriods = async (req, res) => {
  try {
    const periods = await Period.find();
    res.status(200).json(periods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single period by ID
exports.getPeriodById = async (req, res) => {
  try {
    const period = await Period.findById(req.params.id);
    if (!period) {
      return res.status(404).json({ message: 'Period not found' });
    }
    res.status(200).json(period);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a period by ID
exports.updatePeriod = async (req, res) => {
  try {
    const { periodId, periodName } = req.body;
    const period = await Period.findByIdAndUpdate(
      req.params.id,
      { periodId, periodName },
      { new: true, runValidators: true }
    );
    if (!period) {
      return res.status(404).json({ message: 'Period not found' });
    }
    res.status(200).json(period);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a period by ID
exports.deletePeriod = async (req, res) => {
  try {
    const period = await Period.findByIdAndDelete(req.params.id);
    if (!period) {
      return res.status(404).json({ message: 'Period not found' });
    }
    res.status(200).json({ message: 'Period deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
