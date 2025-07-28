// src/features/tasks/taskService.js
import axios from "axios";

const API_URL = "/api/tasks/";

// Get all tasks
const getTasks = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Create a new task
const createTask = async (taskData, token) => {
  const res = await axios.post(API_URL, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Update a task
const updateTask = async (taskId, taskData, token) => {
  const res = await axios.put(`${API_URL}${taskId}`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Delete a task
const deleteTask = async (taskId, token) => {
  const res = await axios.delete(`${API_URL}${taskId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const taskService = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};

export default taskService;
