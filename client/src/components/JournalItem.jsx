import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteJournal, updateJournal } from "../features/journal/journalSlice";

const JournalItem = ({ journal }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: journal.title,
    content: journal.content,
    tags: journal.tags?.join(", ") || "",
  });

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this journal entry?")) {
      dispatch(deleteJournal(journal._id));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateJournal({
        id: journal._id,
        journalData: {
          ...formData,
          tags: formData.tags.split(",").map((tag) => tag.trim()),
        },
      })
    );
    setIsEditing(false);
  };

  return (
    <div className="bg-white/90 border border-gray-200 rounded-2xl shadow-md p-6 mb-6 transition hover:shadow-xl backdrop-blur-md">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg text-lg font-semibold focus:ring-2 focus:ring-indigo-300"
            placeholder="Title"
            required
          />
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-200"
            placeholder="Content"
            rows={5}
          />
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-100"
            placeholder="Tags (comma separated)"
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
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-indigo-700 tracking-wide">
              {journal.title}
            </h3>

            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {journal.content}
            </p>

            {journal.tags?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {journal.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-5 flex justify-between items-center text-sm text-gray-500">
            <span className="italic">
              {new Date(journal.createdAt).toLocaleString()}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
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

export default JournalItem;
