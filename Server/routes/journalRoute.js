const express = require("express");
const router = express.Router();
const {
  getJournals,
  createJournal,
  updateJournals,
  deleteJournals,
} = require("../controllers/journalController");
const { protect } = require("../middlewares/authMiddleware");

router.route("/").get(protect, getJournals).post(protect, createJournal);
router.route("/:id").put(protect, updateJournals).delete(protect, deleteJournals);

module.exports = router;
