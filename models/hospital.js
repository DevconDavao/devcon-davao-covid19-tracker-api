const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  id: String,
  provinceId: String,
  name: String,
});

module.exports = mongoose.model('Hospital', hospitalSchema);
