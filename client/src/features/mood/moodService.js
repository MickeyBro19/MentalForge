// src/features/mood/moodService.js
import axios from "axios";

const API_URL = "/api/moods/";

// Get all moods
const getMoods = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Create a new mood
const createMood = async (moodData, token) => {
  const res = await axios.post(API_URL, moodData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Update mood
const updateMood = async (moodId, moodData, token) => {
  const res = await axios.put(`${API_URL}${moodId}`, moodData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Delete mood
const deleteMood = async (moodId, token) => {
  const res = await axios.delete(`${API_URL}${moodId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const moodService = {
  getMoods,
  createMood,
  updateMood,
  deleteMood,
};

export default moodService;
