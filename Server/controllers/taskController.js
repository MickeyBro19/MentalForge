const asyncHandler = require("express-async-handler");
const Goal = require("../models/taskModel");

const getTasks = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

const createTask = asyncHandler(async (req, res) => {
  const body = req.body;
  if (!body.task) {
    res.status(400);
    throw new Error("Task body is required");
  }
  const goal = await Goal.create({
    task: body.task,
  });
  res.status(201).json(goal);
});

const updateTasks = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const goal = Goal.findById(id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(id, body, { new: true });
  res.status(200).json(updatedGoal);
});

const deleteTasks = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const goal = Goal.findById(id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }
  const deletedGoal = await Goal.findByIdAndDelete(id);
  res.status(200).json(deletedGoal);
});

module.exports = { getTasks, createTask, updateTasks, deleteTasks };
