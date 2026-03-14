const mongoose = require('mongoose');

const periodSchema = new mongoose.Schema({
  periodId: {
    type: String,
    required: true,
    unique: true
  },
  periodName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Period', periodSchema);
