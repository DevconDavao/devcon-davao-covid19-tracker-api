const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
    first_name: String,
    last_name: String,
    assigned_area: String
});

module.exports = mongoose.model('User', userSchema);