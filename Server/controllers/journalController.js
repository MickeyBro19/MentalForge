const asyncHandler = require("express-async-handler");
const Journal = require("../models/journalModel");

// @desc    Get all journals
// @route   GET /api/journals
// @access  Private
const getJournals = asyncHandler(async (req, res) => {
  const journals = await Journal.find({ user: req.user._id });
  res.status(200).json(journals);
});

// @desc    Create a journal
// @route   POST /api/journals
// @access  Private
const createJournal = asyncHandler(async (req, res) => {
  const { title, content, tags } = req.body;

  if (!title) {
    res.status(400);
    throw new Error("Title is required");
  }

  const journalEntry = await Journal.create({
    user: req.user._id,
    title,
    content,
    tags,
  });

  res.status(201).json(journalEntry);
});

// @desc    Update a journal
// @route   PUT /api/journals/:id
// @access  Private
const updateJournals = asyncHandler(async (req, res) => {
  const journal = await Journal.findById(req.params.id);

  if (!journal) {
    res.status(404);
    throw new Error("Journal not found");
  }

  // Optional: ensure user owns the journal
  if (journal.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized to update this journal");
  }

  const updatedJournal = await Journal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedJournal);
});

// @desc    Delete a journal
// @route   DELETE /api/journals/:id
// @access  Private
const deleteJournals = asyncHandler(async (req, res) => {
  const journal = await Journal.findById(req.params.id);

  if (!journal) {
    res.status(404);
    throw new Error("Journal not found");
  }

  // Optional: check ownership
  if (journal.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized to delete this journal");
  }

  await journal.deleteOne();
  res.status(200).json({ message: "Journal deleted", id: req.params.id });
});

module.exports = {
  getJournals,
  createJournal,
  updateJournals,
  deleteJournals,
};
