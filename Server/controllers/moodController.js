const asyncHandler = require("express-async-handler");
const Mood = require("../models/moodModel");

// @desc    Get all moods
// @route   GET /api/moods
// @access  Private
const getMoods = asyncHandler(async (req, res) => {
  const moods = await Mood.find({ user: req.user._id });
  res.status(200).json(moods);
});

// @desc    Create a mood
// @route   POST /api/moods
// @access  Private
const createMood = asyncHandler(async (req, res) => {
  const { mood, note } = req.body;

  if (!mood) {
    res.status(400);
    throw new Error("Mood is required");
  }

  const moodEntry = await Mood.create({
    user: req.user._id,
    mood,
    note,
  });

  res.status(201).json(moodEntry);
});

// @desc    Update a mood
// @route   PUT /api/moods/:id
// @access  Private
const updateMoods = asyncHandler(async (req, res) => {
  const mood = await Mood.findById(req.params.id);

  if (!mood) {
    res.status(404);
    throw new Error("Mood not found");
  }

  // Optional: ensure user owns the mood
  if (mood.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized to update this mood");
  }

  const updatedMood = await Mood.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedMood);
});

// @desc    Delete a mood
// @route   DELETE /api/moods/:id
// @access  Private
const deleteMoods = asyncHandler(async (req, res) => {
  const mood = await Mood.findById(req.params.id);

  if (!mood) {
    res.status(404);
    throw new Error("Mood not found");
  }

  // Optional: check ownership
  if (mood.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized to delete this mood");
  }

  await mood.deleteOne();
  res.status(200).json({ message: "Mood deleted", id: req.params.id });
});

module.exports = {
  getMoods,
  createMood,
  updateMoods,
  deleteMoods,
};
