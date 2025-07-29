import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-extrabold text-indigo-700">📊 Dashboard Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard title="Tasks" count={5} icon="✅" link="/dashboard/tasks" />
        <SummaryCard title="Journal Entries" count={2} icon="📝" link="/dashboard/journal" />
        <SummaryCard title="Mood Logs" count={7} icon="📊" link="/dashboard/mood" />
        <SummaryCard title="Upcoming Events" count={3} icon="📅" link="/dashboard/calendar" />
      </div>

      {/* Preview Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PreviewPanel title="Latest Tasks" link="/dashboard/tasks">
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Finish React routing</li>
            <li>• Write journal entry about today</li>
            <li>• Review weekly mood chart</li>
          </ul>
        </PreviewPanel>

        <PreviewPanel title="Mood Summary" link="/dashboard/mood">
          <div className="flex items-center space-x-4">
            <span className="text-4xl">😊</span>
            <p className="text-gray-600">Your average mood this week is: <strong>Positive</strong></p>
          </div>
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
      <Link to={link} className="text-sm text-indigo-500 hover:underline">View All</Link>
    </div>
    {children}
  </div>
);

export default DashboardHome;
