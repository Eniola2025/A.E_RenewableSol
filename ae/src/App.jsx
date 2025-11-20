import React, { useState } from "react";
import './App.css'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const modeClass = lightMode
    ? "bg-white text-gray-900"
    : "bg-gray-900 text-white";

  return (
    <ToolBox />
  );
}

export default App;
