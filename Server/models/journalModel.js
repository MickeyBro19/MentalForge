const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    content: {
      type: String,
      required: [true, 'Please add some content'],
    },
    tags: [
      {
        type: String,
        lowercase: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Journal', journalSchema);
