"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 5) + 1; // increment 1–5%
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 300); // fade out after 0.3s
      }
      setProgress(value);
    }, 50); // update every 50ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Loading overlay */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-sky-900 text-white transition-opacity duration-700 ${
          loading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="font-empirez text-5xl font-bold">{progress}%</span>
        <span className="font-empirez mt-2 text-lg tracking-wider">Loading...</span>
      </div>

      {/* Main content */}
      <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
        {children}
      </div>
    </div>
  );
}
