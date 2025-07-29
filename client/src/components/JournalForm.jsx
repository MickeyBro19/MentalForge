import { useState } from "react";
import { useDispatch } from "react-redux";
import { createJournal } from "../features/journal/journalSlice";

const JournalForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) return;

    // Convert comma-separated tags string to array
    const tagsArray = formData.tags
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter((tag) => tag.length > 0);

    dispatch(
      createJournal({
        title: formData.title,
        content: formData.content,
        tags: tagsArray,
      })
    );

    setFormData({ title: "", content: "", tags: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-indigo-700">New Journal Entry</h2>

      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Journal title"
        className="w-full px-3 py-2 border rounded"
        required
      />

      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Your thoughts, notes, or story..."
        className="w-full px-3 py-2 border rounded"
        rows={5}
        required
      />

      <input
        type="text"
        name="tags"
        value={formData.tags}
        onChange={handleChange}
        placeholder="Tags (comma separated, e.g. reflection, goals)"
        className="w-full px-3 py-2 border rounded"
      />

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Create Entry
      </button>
    </form>
  );
};

export default JournalForm;
