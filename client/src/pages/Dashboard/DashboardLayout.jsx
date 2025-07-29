import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-indigo-50 via-white to-purple-50 ">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-white/80 backdrop-blur-xl  shadow-lg px-6 py-10">
        {/* <h2 className="text-3xl font-extrabold text-indigo-600 mb-10 text-center tracking-wide">
          🧠 MentalForge
        </h2> */}
        <nav className="space-y-4 text-base font-medium">
          {[
            {to: ".", label: "🏠 Home"},
            { to: "tasks", label: "✅ Tasks" },
            { to: "journal", label: "📝 Journal" },
            { to: "mood", label: "📊 Mood Tracker" },
            { to: "calendar", label: "📅 Calendar" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "."}
              className={({ isActive }) =>
                `block px-5 py-3 rounded-lg transition duration-200 ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 font-extrabold shadow-sm"
                    : "text-gray-700 hover:bg-indigo-50"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-10 py-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
