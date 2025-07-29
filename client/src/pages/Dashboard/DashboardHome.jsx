import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../../features/task/taskSlice";
import { getJournals } from "../../features/journal/journalSlice";
import { getMoods } from "../../features/mood/moodSlice";
import { useEffect } from "react";

const DashboardHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
    dispatch(getJournals());
    dispatch(getMoods());
  }, [dispatch]);

  const moodEmojiMap = {
    happy: "😊",
    sad: "😢",
    angry: "😠",
    anxious: "😰",
    neutral: "😐",
  };
  const { tasks } = useSelector((state) => state.tasks);
  const { moods } = useSelector((state) => state.moods);
  const { journals } = useSelector((state) => state.journals);

  const taskCount = tasks.length || 0;
  const moodCount = moods.length || 0;
  const journalCount = journals.length || 0;

  const getMoodTrend = (moods) => {
    if (!moods || moods.length === 0) return null;

    const moodCount = moods.reduce((acc, mood) => {
      acc[mood.mood] = (acc[mood.mood] || 0) + 1;
      return acc;
    }, {});

    const sortedMoods = Object.entries(moodCount).sort((a, b) => b[1] - a[1]);

    const [topMood, count] = sortedMoods[0];

    return {
      mood: topMood,
      count,
      total: moods.length,
      emoji: moodEmojiMap[topMood] || "❓",
    };
  };

  const moodSummary = getMoodTrend(moods);

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-extrabold text-indigo-700">
        📊 Dashboard Overview
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Tasks"
          count={taskCount}
          icon="✅"
          link="/dashboard/tasks"
        />
        <SummaryCard
          title="Journal Entries"
          count={journalCount}
          icon="📝"
          link="/dashboard/journal"
        />
        <SummaryCard
          title="Mood Logs"
          count={moodCount}
          icon="📊"
          link="/dashboard/mood"
        />
        <SummaryCard
          title="Upcoming Events"
          count={3}
          icon="📅"
          link="/dashboard/calendar"
        />
      </div>

      {/* Preview Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PreviewPanel title="Latest Tasks" link="/dashboard/tasks">
          <ul className="text-sm text-gray-700 space-y-2">
            {tasks.slice(0, 3).map((task) => (
              <li key={task._id}>• {task.title}</li>
            ))}
          </ul>
        </PreviewPanel>

        <PreviewPanel title="Mood Summary" link="/dashboard/mood">
          {moodSummary ? (
            <div className="flex items-center gap-4">
              <span className="text-5xl">{moodSummary.emoji}</span>
              <div>
                <p className="text-gray-600 text-sm">
                  Your mood trend this week leans towards:
                </p>
                <h3 className="text-lg font-semibold capitalize text-indigo-700">
                  {moodSummary.mood}
                </h3>
                <p className="text-xs text-gray-500">
                  {moodSummary.count} out of {moodSummary.total} entries were{" "}
                  {moodSummary.mood}.
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">
              No mood entries yet. Start tracking today!
            </p>
          )}
        </PreviewPanel>
      </div>
    </div>
  );
};

const SummaryCard = ({ title, count, icon, link }) => (
  <Link
    to={link}
    className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-all duration-200 border border-gray-200"
  >
    <div className="flex items-center justify-between mb-4">
      <span className="text-3xl">{icon}</span>
      <span className="text-indigo-600 text-lg font-bold">{count}</span>
    </div>
    <h3 className="text-gray-700 font-semibold">{title}</h3>
  </Link>
);

const PreviewPanel = ({ title, link, children }) => (
  <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-indigo-700">{title}</h3>
      <Link to={link} className="text-sm text-indigo-500 hover:underline">
        View All
      </Link>
    </div>
    {children}
  </div>
);

export default DashboardHome;
