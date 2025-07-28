import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, reset } from "../features/task/taskSlice";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (isError) {
      console.error("Error fetching tasks:", message);
    }

    if (user) {
      dispatch(getTasks());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, dispatch, isError, message]);

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">📋 Your Tasks</h1>

      <TaskForm />

      <div className="mt-8">
        {isLoading ? (
          <p className="text-gray-500">Loading tasks...</p>
        ) : tasks.length > 0 ? (
          <div className="grid gap-4">
            {tasks.map((task) => (
              <TaskItem key={task._id} task={task} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No tasks yet. Create one!</p>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
