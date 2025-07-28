import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../features/task/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(task._id));
    }
  };

  const toggleComplete = () => {
    dispatch(
      updateTask({
        id: task._id,
        taskData: {
          title: task.title,
          description: task.description,
          isCompleted: !task.isCompleted,
        },
      })
    );
  };

  return (
    <div className="bg-white border rounded p-4 shadow-sm flex justify-between items-start mb-4">
      <div>
        <h3
          className={`text-lg font-semibold ${
            task.isCompleted ? "line-through text-gray-500" : ""
          }`}
        >
          {task.title}
        </h3>
        {task.description && (
          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
        )}
        <p className="text-xs text-gray-400 mt-2">
          Created: {new Date(task.createdAt).toLocaleString()}
        </p>
      </div>

      <div className="space-x-2 flex items-center">
        <button
          onClick={toggleComplete}
          className={`px-2 py-1 rounded text-sm ${
            task.isCompleted
              ? "bg-yellow-500 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          {task.isCompleted ? "Mark Incomplete" : "Mark Complete"}
        </button>

        <button
          onClick={handleDelete}
          className="px-2 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
