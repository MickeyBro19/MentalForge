import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../features/task/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
  });

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(task._id));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateTask({
        id: task._id,
        taskData: { ...formData, isCompleted: task.isCompleted },
      })
    );
    setIsEditing(false);
  };

  const toggleComplete = () => {
    dispatch(
      updateTask({
        id: task._id,
        taskData: {
          ...formData,
          isCompleted: !task.isCompleted,
        },
      })
    );
  };

  return (
    <div
      className={`rounded-xl p-5 shadow-sm mb-4 border border-gray-200 transition-all duration-300 ${
        task.isCompleted
          ? "bg-gray-100 opacity-70 hover:opacity-90"
          : "bg-white hover:shadow-lg"
      }`}
    >
      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-3">
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full px-3 py-2 border rounded text-lg font-semibold"
            placeholder="Task Title"
            required
          />
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full px-3 py-2 border rounded"
            placeholder="Task Description"
          />
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <h3
            className={`text-lg font-semibold transition-all ${
              task.isCompleted ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {task.title}
          </h3>

          {task.description && (
            <p
              className={`text-sm mt-1 transition ${
                task.isCompleted
                  ? "line-through text-gray-400 italic"
                  : "text-gray-600"
              }`}
            >
              {task.description}
            </p>
          )}

          <p className="text-xs text-gray-400 mt-2">
            Created: {new Date(task.createdAt).toLocaleString()}
          </p>

          <div className="mt-4 flex flex-wrap justify-end gap-2 text-sm">
            <button
              onClick={toggleComplete}
              className={`px-3 py-1 rounded font-medium transition ${
                task.isCompleted
                  ? "bg-yellow-500 text-white hover:bg-yellow-600"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              {task.isCompleted ? "Mark Incomplete" : "Mark Complete"}
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
