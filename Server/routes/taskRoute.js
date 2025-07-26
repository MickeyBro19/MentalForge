const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTasks,
  deleteTasks,
} = require("../controllers/taskController");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").put(updateTasks).delete(deleteTasks);

module.exports = router;
