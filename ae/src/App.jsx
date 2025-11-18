import React, { useState } from "react";
import './App.css'
import './index.css'

const sidebarFiles = [
  "breaker.html",
  "certificate.html",
  "completion.html",
  "Earthing.html",
  "Earthing.css",
  "kit.js",
  "toolBox.html",
  "toolBox.js",
  "toolBox.css",
];

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const modeClass = lightMode
    ? "bg-white text-gray-900"
    : "bg-gray-900 text-white";

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${modeClass}`}>
      {/* Sidebar */}
      <div
        className={`fixed z-20 top-0 left-0 h-full transition-all duration-500 ease-in-out bg-gray-800 dark:bg-gray-200 shadow-lg flex flex-col ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          className="m-4 p-2 rounded bg-blue-500 text-white dark:bg-blue-700 focus:outline-none transition-transform duration-300"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label="Toggle sidebar"
        >
          <span
            className={`block transition-transform duration-300 ${
              sidebarOpen ? "rotate-90" : ""
            }`}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-4 py-2 text-xs font-bold text-gray-400 dark:text-gray-700 uppercase tracking-wider">
            Project UI Files
          </div>
          <ul className="mt-2 space-y-1">
            {sidebarFiles.map((file) => (
              <li
                key={file}
                className="px-4 py-2 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-300 dark:hover:text-gray-900 cursor-pointer transition-colors duration-200"
              >
                {file}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div
        className={`flex-1 min-h-screen transition-all duration-500 ml-16 ${
          sidebarOpen ? "md:ml-64" : "md:ml-16"
        }`}
      >
        <header className="flex items-center justify-between px-8 py-6 border-b border-gray-700 dark:border-gray-200">
          <h1 className="text-2xl font-bold tracking-tight">Modern Project UI</h1>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={lightMode}
              onChange={() => setLightMode((m) => !m)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-sm">Light mode</span>
          </label>
        </header>
        <main className="p-8">
          <div className="rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 shadow-xl text-center">
            <h2 className="text-3xl font-bold mb-2">Welcome to your Project UI</h2>
            <p className="text-lg text-gray-400 dark:text-gray-700 mb-4">
              Use the animated sidebar to browse project files. Toggle light/dark mode for your preferred look.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-600">
              Start building your modern, responsive React app!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
