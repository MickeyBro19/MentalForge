const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTasks,
  deleteTasks,
} = require("../controllers/taskController");
const { protect } = require("../middlewares/authMiddleware");

router.route("/").get(protect, getTasks).post(protect, createTask);
router.route("/:id").put(protect, updateTasks).delete(protect, deleteTasks);

module.exports = router;
