const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  id: String,
  hospitalId: String,
  patientDiscriminator: String,
  admissionDate: Date,
  dischargeDate: Date,
  status: {
    type: String,
    enum: ['SUSPECTED', 'RECOVERED', 'POSITIVE']
  }
});

module.exports = mongoose.model('Case', caseSchema);
