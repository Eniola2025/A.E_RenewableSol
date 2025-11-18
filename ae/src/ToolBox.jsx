import React, { useState } from "react";

const ToolBox = () => {
  // State for light/dark mode
  const [lightMode, setLightMode] = useState(false);

  // Placeholder for results and loading
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  // Placeholder for input values
  const [inputs, setInputs] = useState({
    load: "",
    usagehrDay: "",
    psh: 5,
    panelEff: 30,
    dod: 80,
    sysLoss: 0.8,
    batteryEff: 100,
  });

  // Placeholder for selected load percentage
  const [selectedLoad, setSelectedLoad] = useState(null);

  // Handlers for input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  // Handler for load percentage selection
  const handleLoadSelect = (val) => setSelectedLoad(val);

  // Handler for mode toggle
  const handleModeToggle = () => setLightMode((m) => !m);

  // Placeholder for compute and quotation logic
  const handleCompute = () => {
    setLoading(true);
    setDone(false);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(() => setDone(false), 1500);
    }, 2000);
  };

  const handleQuotation = () => {
    setLoading(true);
    setDone(false);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(() => setDone(false), 1500);
    }, 2000);
  };

  // Handler for reset
  const handleReset = () => {
    setInputs({
      load: "",
      usagehrDay: "",
      psh: 5,
      panelEff: 30,
      dod: 80,
      sysLoss: 0.8,
      batteryEff: 100,
    });
    setSelectedLoad(null);
  };

  // Light/dark mode class for Tailwind
  const modeClass = lightMode ? "bg-white text-gray-900" : "bg-gray-900 text-white";

  return (
    <div className={`container mx-auto p-4 min-h-screen ${modeClass}`}>
      {/* HEADER CONTENT */}
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          {/* SIDEVIEW */}
          <div className="mr-4">
            <button className="border rounded px-2 py-1">|||</button>
            <div>{/* Pages List */}</div>
          </div>
          {/* HEADER TITLE */}
          <div>
            <h1 className="text-2xl font-bold">
              Installer Tool Kit <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs ml-2">100% Accuracy.</span>
            </h1>
            <div className="text-gray-400 text-sm">
              Complete Solar Design & Sizing Toolkit – from Load to Quotation.
            </div>
          </div>
        </div>
        {/* LIGHT MODE TOGGLE */}
        <div className="ml-4">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={lightMode}
              onChange={handleModeToggle}
              className="form-checkbox"
            />
            <span className="ml-2">Light mode</span>
          </label>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT: Inputs */}
        <div className="bg-gray-800 dark:bg-white rounded-lg shadow p-6 mb-4">
          <h1 className="text-xl font-semibold mb-2">Panel Sizing</h1>
          <h2 className="text-lg mb-4">Input</h2>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-1/2 mb-2">
              <label className="block">Total Load Power <span className="text-xs">(W)</span></label>
              <input
                id="load"
                type="number"
                min="0"
                step="100"
                placeholder="e.g. 1000"
                value={inputs.load}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1 mt-1 text-black"
              />
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <label className="block">Backup Time<span className="text-xs">(hr/day)</span></label>
              <input
                id="usagehrDay"
                type="number"
                min="0"
                step="1"
                placeholder="e.g. 8"
                value={inputs.usagehrDay}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1 mt-1 text-black"
              />
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <label className="block">Peak Sun Hours (PSH) <span className="text-xs">(hr/day)</span></label>
              <input
                id="psh"
                type="number"
                min="1"
                max="10"
                step="1"
                placeholder="e.g. 5"
                value={inputs.psh}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1 mt-1 text-black"
              />
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <label className="block">Optional: Panel Factor <span className="text-xs">(%, default 30%)</span></label>
              <input
                id="panelEff"
                type="number"
                min="10"
                max="100"
                step="1"
                placeholder="e.g. 30%"
                value={inputs.panelEff}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1 mt-1 text-black"
              />
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <label className="block">Optional: Depth of Discharge <span className="text-xs">(%, default 80)</span></label>
              <input
                id="dod"
                type="number"
                min="50"
                max="100"
                step="1"
                placeholder="80"
                value={inputs.dod}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1 mt-1 text-black"
              />
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <label className="block">Optional: System Losses <span className="text-xs">(%, default 80)</span></label>
              <input
                id="sysLoss"
                type="number"
                min="50"
                max="100"
                step="0.2"
                placeholder="0.8"
                value={inputs.sysLoss}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1 mt-1 text-black"
              />
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <label className="block font-bold">Percentage on Load</label>
              <input
                id="batteryEff"
                type="number"
                min="10"
                max="100"
                step="5"
                placeholder="100"
                value={inputs.batteryEff}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1 mt-1 text-black"
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Percentage Load% on Battery</h3>
            <div className="flex flex-wrap gap-2">
              {[100, 90, 80, 70, 60, 50, 40, 30, 20, 10].map((val) => (
                <div
                  className={`border rounded px-2 py-1 cursor-pointer transition ${selectedLoad === val ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                  key={val}
                  onClick={() => handleLoadSelect(val)}
                >
                  <button className="top-btn">{val}%</button>
                  <button className="bottom-btn"></button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <button id="compute" type="button" onClick={handleCompute} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Compute Array
            </button>
            <button id="reset" type="button" className="bg-gray-200 text-gray-800 rounded px-4 py-2" onClick={handleReset}>
              Reset
            </button>
            <button id="copy" type="button" className="bg-gray-200 text-gray-800 rounded px-4 py-2" onClick={handleQuotation}>
              Quotation
            </button>
          </div>
          {/* LOADING */}
          {loading && <div id="loading" className="mt-2">⏳ Loading...</div>}
          {done && <div id="done" className="mt-2">✅ Done</div>}
        </div>

        {/* RIGHT: Results (placeholder) */}
        <div className="bg-gray-800 dark:bg-white rounded-lg shadow p-6 mb-4">
          <h2 className="text-lg font-semibold mb-4">Results</h2>
          <div className="out" id="results">
            {/* Results will be shown here after logic is ported */}
            <div className="flex items-center gap-2 mb-2">
              <div className="font-semibold">Load:</div>
              <div className="v" id="loadResult">—</div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="font-semibold">Required PV array:</div>
              <div className="v" id="requiredPV">—</div>
              <div className="pv" id="pv">--</div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="font-semibold">Panel count (rounded up):</div>
              <div className="v" id="pvNos">—</div>
              <div className="pvN" id="pvN"></div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="font-semibold">Recommended Panel(W):</div>
              <div className="v" id="panelWatt">—</div>
              <div className="panelBrand" id="panelBrand">--</div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="font-semibold">Estimated daily energy:</div>
              <div className="v" id="dailyEnergyGeneration">—</div>
              <div className="kwD" id="kwD">--</div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="font-semibold">Status:</div>
              <div className="v" id="fitStatus">—</div>
              <div className="unit"></div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="font-semibold">Inverter System:</div>
              <div className="v" id="inverterNos">—</div>
              <div className="requiredInverterO" id="requiredInverterO">MaxPower</div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="font-semibold">Battery Sizing:</div>
              <div className="v" id="BatteryCapacity">—</div>
              <div className="checkingVolt" id="checkingVolt"></div>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            <hr className="my-2 border-gray-700" />
            <p>
              For detailed system design and professional quotation, please use the
              "Quotation" button.
            </p>
            <hr className="my-2 border-gray-700" />
            <p>
              Developed by. <a href="https://github.com/EniolaAbdulQodir/MindThread_Ai" className="underline">Abdulrasaq Eniola.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolBox;
