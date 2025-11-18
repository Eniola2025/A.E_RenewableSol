import React, { useEffect, useState } from "react";

const App = () => {
  const [lightMode, setLightMode] = useState(false);

  // Sync Tailwind's dark mode class with React state
  useEffect(() => {
    const root = window.document.documentElement;
    if (lightMode) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [lightMode]);

  const modeClass = lightMode
    ? "bg-white text-gray-900"
    : "bg-gray-900 text-white";

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${modeClass}`}>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <img src="/TheProjectUi/logo.jpg" alt="A.E Renewable Logo" className="h-10 w-10 rounded-full shadow" />
          <span className="font-bold text-xl tracking-tight">A.E RENEWABLE</span>
        </div>
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <a href="#features" className="hover:text-blue-500 transition">Features</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold">Dark Mode</span>
          <button
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${lightMode ? 'bg-gray-300' : 'bg-gray-700'}`}
            onClick={() => setLightMode((m) => !m)}
            aria-label="Toggle dark mode"
          >
            <span
              className={`h-4 w-4 rounded-full bg-white shadow transform transition-transform duration-300 ${lightMode ? 'translate-x-6' : ''}`}
            ></span>
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Complete Electrical Design & Breaker Sizing</h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600 dark:text-gray-300">
            100% Accurate. Fast. Professional. <br />
            Design, size, and quote your next solar or electrical project with confidence.
          </p>
          <a href="#features" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition">Get Started</a>
        </div>
        <div className="mt-10 md:mt-0 md:ml-12 flex-1 flex justify-center">
          <img src="/TheProjectUi/rural_hero.jpg" alt="Solar Panels" className="rounded-2xl shadow-2xl w-full max-w-md border-4 border-blue-200 dark:border-gray-700" />
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="px-6 py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Tool?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 dark:bg-gray-900 rounded-lg p-6 shadow text-center transition-colors duration-300">
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-2">⚡</div>
              <h3 className="font-bold text-lg mb-2">Accurate Breaker Sizing</h3>
              <p>Get precise breaker and cable sizing for any project, with built-in safety and efficiency checks.</p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-900 rounded-lg p-6 shadow text-center transition-colors duration-300">
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-2">📊</div>
              <h3 className="font-bold text-lg mb-2">Professional Quotation</h3>
              <p>Instantly generate a professional quotation and system summary for your clients.</p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-900 rounded-lg p-6 shadow text-center transition-colors duration-300">
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-2">🌞</div>
              <h3 className="font-bold text-lg mb-2">Solar & Electrical Ready</h3>
              <p>Works for both solar and conventional electrical projects, with support for all phases and voltages.</p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="px-6 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About A.E Renewable</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">We are dedicated to empowering installers and engineers with the best digital tools for modern energy projects. Our platform is built by professionals, for professionals.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
            <div className="flex-1">
              <img src="/TheProjectUi/logo.jpg" alt="A.E Renewable Logo" className="h-24 w-24 rounded-full mx-auto shadow-lg" />
              <div className="mt-2 font-semibold">A.E RENEWABLE LTD</div>
            </div>
            <div className="flex-1 text-left md:text-center">
              <div className="font-bold mb-1">Contact</div>
              <div>Email: <a href="mailto:info@aerenewable.com" className="text-blue-600 dark:text-blue-400 underline">info@aerenewable.com</a></div>
              <div>Phone: <a href="tel:+2348133615132" className="text-blue-600 dark:text-blue-400 underline">+234 813 361 5132</a></div>
              <div>Website: <a href="https://aerenewable.com" className="text-blue-600 dark:text-blue-400 underline">www.aerenewable.com</a></div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="mt-auto px-6 py-6 bg-white dark:bg-gray-800 text-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
        &copy; 2025 A.E RENEWABLE LTD. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
