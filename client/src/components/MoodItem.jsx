import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteMood, updateMood } from "../features/mood/moodSlice";

const moodIcons = {
  happy: "😊",
  sad: "😢",
  angry: "😠",
  anxious: "😰",
  neutral: "😐",
};

const MoodItem = ({ mood }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    mood: mood.mood,
    note: mood.note || "",
  });

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this mood entry?")) {
      dispatch(deleteMood(mood._id));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateMood({
        id: mood._id,
        moodData: formData,
      })
    );
    setIsEditing(false);
  };

  return (
    <div className="bg-white/80 border border-gray-200 rounded-xl p-5 shadow mb-4 transition hover:shadow-lg">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-3">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700">Mood:</label>
            <select
              value={formData.mood}
              onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
              className="border px-3 py-1 rounded"
            >
              {Object.keys(moodIcons).map((m) => (
                <option key={m} value={m}>
                  {moodIcons[m]} {m.charAt(0).toUpperCase() + m.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <textarea
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            placeholder="Optional note..."
            rows={3}
          />
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex items-center gap-3 text-xl font-semibold text-indigo-700">
            <span>{moodIcons[mood.mood]}</span>
            <span className="capitalize">{mood.mood}</span>
          </div>

          {mood.note && (
            <p className="text-gray-700 mt-2 whitespace-pre-wrap italic">
              “{mood.note}”
            </p>
          )}

          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <span>{new Date(mood.createdAt).toLocaleString()}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MoodItem;
