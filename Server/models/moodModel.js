const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    mood: {
      type: String,
      enum: ['happy', 'sad', 'angry', 'anxious', 'neutral'],
      required: [true, 'Please select a mood'],
    },
    note: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey :false
  }
);

module.exports = mongoose.model('Mood', moodSchema);
