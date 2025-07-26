const asyncHandler = require("express-async-handler");

const getTasks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Tasks" });
});

const createTask = asyncHandler(async (req, res) => {
  const body = req.body;
  if (!body.task) {
    res.status(400);
    throw new Error("Task body is required");
  }
  res.status(200).json({ message: "Create Tasks", body: body.task });
});

const updateTasks = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (!body.task) {
    res.status(400);
    throw new Error("Task body is required");
  }
  res
    .status(200)
    .json({ message: "Update Task , Task id is " + id, body: body.task });
});

const deleteTasks = asyncHandler(async (req, res) => {
  const id = req.params.id;

  res.status(200).json({ message: "Delete Task , Task id is " + id });
});

module.exports = { getTasks, createTask, updateTasks, deleteTasks };
