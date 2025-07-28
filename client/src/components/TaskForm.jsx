import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../features/task/taskSlice.js";

const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    dispatch(createTask(formData));

    // Reset form
    setFormData({
      title: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-indigo-700">Add New Task</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={onChange}
        placeholder="Task title"
        className="w-full px-3 py-2 border rounded"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={onChange}
        placeholder="Optional description"
        className="w-full px-3 py-2 border rounded"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
