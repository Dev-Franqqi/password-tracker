const mongoose = require('mongoose');

const PasswordSchema = new mongoose.Schema({
  website: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
},{timestamps:true});

const PasswordEntry = mongoose.model('PasswordEntry', PasswordSchema);

module.exports = PasswordEntry;
