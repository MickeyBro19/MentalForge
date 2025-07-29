import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardCarousel from "../components/DashboardCarousal";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-gradient-to-br from-indigo-200 via-white to-blue-200 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 tracking-tight leading-tight">
          Welcome to <span className="text-indigo-500">MentalForge</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10">
          Your all-in-one productivity cockpit — crush tasks, track moods,
          reflect better.
        </p>

        {!user ? (
          <div className="space-x-4">
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition"
            >
              Login
            </Link>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Hello, {user.name.split(" ")[0]} 👋
            </h2>
            <Link
              to="/dashboard"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Go to Dashboard
            </Link>
          </div>
        )}
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
          What You Can Do on{" "}
          <span className="text-indigo-500">MentalForge</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Dashboard Screenshots Carousel */}
      <section className="py-20 px-4 bg-white">
        <DashboardCarousel />
      </section>

      {/* Why MentalForge Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
            Why Choose <span className="text-indigo-500">MentalForge</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyCards.map((card) => (
              <WhyCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Future Updates Section */}
      <section className="py-20 px-6 bg-white/70 backdrop-blur-lg border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            🛠️ Future Enhancements
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            MentalForge is just getting started. Here are some exciting updates
            planned for future releases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UpdateCard
              title="🔐 OAuth Login"
              description="Allow users to securely log in using Google, GitHub, and other identity providers."
            />
            <UpdateCard
              title="📆 Calendar Integration"
              description="Sync your task deadlines and journal logs with a visual calendar view."
            />
            <UpdateCard
              title="📱 Mobile App (React Native)"
              description="Bring MentalForge to your fingertips with a dedicated mobile app."
            />
            <UpdateCard
              title="🔔 Notifications"
              description="Set daily reminders for journaling, mood check-ins, and task goals."
            />
            <UpdateCard
              title="📈 Insights & Analytics"
              description="Visualize your productivity and emotional trends over time."
            />
            <UpdateCard
              title="🌙 Dark Mode"
              description="A clean, eye-friendly dark theme for your late-night reflections."
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      {!user && (
        <div className="text-center py-16">
          <p className="text-lg text-gray-700 mb-6">
            Ready to forge a more mindful and productive you?
          </p>
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition"
          >
            Get Started for Free
          </Link>
        </div>
      )}

      {/* Sticky CTA */}
      {!user && (
        <Link
          to="/register"
          className="fixed bottom-6 right-6 bg-indigo-600 text-white px-5 py-3 rounded-full font-semibold shadow-xl hover:bg-indigo-700 transition z-50"
        >
          Try Now
        </Link>
      )}
    </div>
  );
};

// Feature Highlights
const features = [
  {
    icon: "📝",
    title: "Reflect & Journal",
    color: "indigo",
    description: "Pen down thoughts, reflect emotionally, and gain clarity.",
  },
  {
    icon: "📊",
    title: "Track Moods",
    color: "pink",
    description: "Record daily emotions and discover hidden mental patterns.",
  },
  {
    icon: "✅",
    title: "Crush Tasks",
    color: "green",
    description: "Break down goals into actions. Execute with clarity.",
  },
];

const FeatureCard = ({ icon, title, description, color }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
    <div
      className={`text-5xl bg-${color}-100 text-${color}-600 rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow mb-4`}
    >
      {icon}
    </div>
    <h3 className={`text-xl font-bold text-${color}-700 mb-2`}>{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Why MentalForge
const whyCards = [
  {
    title: "💡 Built for Clarity",
    desc: "Discover patterns, reflect deeper, and eliminate clutter.",
  },
  {
    title: "⚡ Lightning Fast",
    desc: "Snappy, reactive, and beautifully optimized MERN stack.",
  },
  {
    title: "🧠 Mental-First Design",
    desc: "Intuitive workflows designed for your real brain, not corporate checkboxes.",
  },
];

const WhyCard = ({ title, desc }) => (
  <div className="bg-white p-6 rounded-xl shadow border border-gray-100 hover:shadow-lg transition">
    <h3 className="text-lg font-semibold text-indigo-600 mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const UpdateCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-100 text-left">
    <h3 className="text-lg font-semibold text-indigo-700 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
