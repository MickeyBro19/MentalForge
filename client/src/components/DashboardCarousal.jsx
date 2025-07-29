import { useEffect, useState } from "react";

const images = [
  "/preview-1.png",
  "/preview-2.png",
  "/preview-3.png",
];

const DashboardCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4s delay

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
        Sneak Peek into Your Dashboard
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        A glimpse of your productivity cockpit in action — showcasing Tasks, Journal, Mood & more.
      </p>

      <div className="relative w-full aspect-video bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Preview ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default DashboardCarousel;
