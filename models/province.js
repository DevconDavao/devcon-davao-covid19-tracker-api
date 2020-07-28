const mongoose = require('mongoose');

const provinceSchema = new mongoose.Schema({
  id: String,
  name: String,
});

module.exports = mongoose.model('Province', provinceSchema);
