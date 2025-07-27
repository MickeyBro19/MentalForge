const express = require("express");
const router = express.Router();
const {
  getMoods,
  createMood,
  updateMoods,
  deleteMoods,
} = require("../controllers/moodController");
const { protect } = require("../middlewares/authMiddleware");

router.route("/").get(protect, getMoods).post(protect, createMood);
router.route("/:id").put(protect, updateMoods).delete(protect, deleteMoods);

module.exports = router;
