import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-indigo-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-24 px-4">
        <h1 className="text-5xl font-extrabold text-indigo-700 leading-tight mb-4 animate-fade-in">
          Welcome to <span className="text-indigo-500">MentalForge</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 animate-fade-in delay-100">
          Your mental productivity cockpit — organize tasks, track your moods,
          and reflect meaningfully.
        </p>

        {!user ? (
          <div className="space-x-4 animate-fade-in delay-200">
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="animate-fade-in delay-200">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Hello, {user.name.split(" ")[0]} 👋
            </h2>
            <Link
              to="/dashboard"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300"
            >
              Go to Dashboard
            </Link>
          </div>
        )}
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12 animate-fade-in">
          What You Can Do on{" "}
          <span className="text-indigo-500">MentalForge</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="📝"
            title="Reflect & Journal"
            color="indigo"
            description="Pen down your thoughts, reflect on emotions, and build mental clarity."
          />
          <FeatureCard
            icon="📊"
            title="Track Your Moods"
            color="pink"
            description="Log your emotional state and discover hidden patterns in your mind."
          />
          <FeatureCard
            icon="✅"
            title="Crush Your Tasks"
            color="green"
            description="Break goals into actions. Stay organized and win the day."
          />
        </div>
      </section>

      {/* Live Preview */}
      {/* <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Sneak Peek into Your Dashboard
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Here's how your productivity cockpit looks in action. Simple. Focused. Effective.
        </p>
        <img
          src="/dashboard-preview.png" // <-- add your image in public/
          alt="Dashboard Preview"
          className="rounded-xl border shadow-lg"
        />
      </section> */}

      {/* Why MentalForge Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
            Why Choose <span className="text-indigo-500">MentalForge</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <WhyCard
              title="💡 Built for Clarity"
              desc="Discover patterns, reflect better, and focus without clutter."
            />
            <WhyCard
              title="⚡ Lightning Fast"
              desc="Optimized MERN stack architecture — no lag, no delay."
            />
            <WhyCard
              title="🧠 Mental-First Design"
              desc="Built for your cognitive flow, not corporate checklists."
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      {!user && (
        <div className="mt-16 text-center animate-fade-in pb-12">
          <p className="text-lg text-gray-700 mb-4">
            Ready to forge a more mindful and productive you?
          </p>
          <Link
            to="/register"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition duration-300"
          >
            Get Started for Free
          </Link>
        </div>
      )}

      {/* Sticky CTA */}
      {!user && (
        <Link
          to="/register"
          className="fixed bottom-5 right-5 bg-indigo-600 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
        >
          Try Now
        </Link>
      )}
    </div>
  );
};

// FeatureCard Component
const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white bg-opacity-70 backdrop-blur-lg border border-gray-200 rounded-xl shadow-lg p-6 hover:scale-[1.03] transform transition duration-300 ease-in-out">
      <div
        className={`text-5xl mb-4 bg-${color}-100 p-4 rounded-full w-fit mx-auto text-${color}-600 shadow-sm`}
      >
        {icon}
      </div>
      <h3 className={`text-xl font-bold text-center text-${color}-700 mb-2`}>
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

// WhyCard Component
const WhyCard = ({ title, desc }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
    <h3 className="text-lg font-semibold text-indigo-600 mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default Home;
