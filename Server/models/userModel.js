const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a username'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
    versionKey :false
  }
);

module.exports = mongoose.model('User', userSchema);