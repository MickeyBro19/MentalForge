// src/features/journals/journalService.js
import axios from "axios";

const API_URL = "/api/journals/";

// Get all journals
const getJournals = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Create a new journal
const createJournal = async (journalData, token) => {
  const res = await axios.post(API_URL, journalData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Update a journal
const updateJournal = async (journalId, journalData, token) => {
  const res = await axios.put(`${API_URL}${journalId}`, journalData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Delete a journal
const deleteJournal = async (journalId, token) => {
  const res = await axios.delete(`${API_URL}${journalId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const journalService = {
  getJournals,
  createJournal,
  updateJournal,
  deleteJournal,
};

export default journalService;
