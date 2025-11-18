import React, { useState } from "react";
import "./toolbox.css";

// Utility functions from toolBox.js will be refactored into hooks or helpers
// For now, only the UI skeleton is ported. Logic will be added next.

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

  // Light/dark mode class
  const modeClass = lightMode ? "light" : "dark";

  return (
    <div className={`container ${modeClass}`}>
      {/* HEADER CONTENT */}
      <div className="title">
        <div>
          {/* SIDEVIEW */}
          <div className="sideView">
            <button className="hamburger">|||</button>
            <div className="sidePages">{/* Pages List */}</div>
          </div>
          {/* HEADER TITLE */}
          <div>
            <h1>
              Installer Tool Kit <span className="badge">100% Accuracy.</span>
            </h1>
            <div className="subtitle">
              Complete Solar Design & Sizing Toolkit – from Load to Quotation.
            </div>
          </div>
        </div>
        {/* LIGHT MODE TOGGLE */}
        <div className="toggle">
          <label className="pill">
            <input
              type="checkbox"
              checked={lightMode}
              onChange={handleModeToggle}
            />
            Light mode
          </label>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid">
        {/* LEFT: Inputs */}
        <div className="card">
          <h1>Panel Sizing</h1>
          <h2>Input</h2>
          <div className="row">
            <div className="col-6">
              <label>
                Total Load Power <span className="unit">(W)</span>
              </label>
              <br />
              <input
                id="load"
                type="number"
                min="0"
                step="100"
                placeholder="e.g. 1000"
                value={inputs.load}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-6">
              <label>
                Backup Time<span className="unit">(hr/day)</span>
              </label>
              <br />
              <input
                id="usagehrDay"
                type="number"
                min="0"
                step="1"
                placeholder="e.g. 8"
                value={inputs.usagehrDay}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-6">
              <label>
                Peak Sun Hours (PSH) <span className="unit">(hr/day)</span>
              </label>
              <br />
              <input
                id="psh"
                type="number"
                min="1"
                max="10"
                step="1"
                placeholder="e.g. 5"
                value={inputs.psh}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-6">
              <label>
                Optional: Panel Factor <span className="unit">(%, default 30%)</span>
              </label>
              <br />
              <input
                id="panelEff"
                type="number"
                min="10"
                max="100"
                step="1"
                placeholder="e.g. 30%"
                value={inputs.panelEff}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-6">
              <label>
                Optional: Depth of Discharge <span className="unit">(%, default 80)</span>
              </label>
              <br />
              <input
                id="dod"
                type="number"
                min="50"
                max="100"
                step="1"
                placeholder="80"
                value={inputs.dod}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-6">
              <label>
                Optional: System Losses <span className="unit">(%, default 80)</span>
              </label>
              <br />
              <input
                id="sysLoss"
                type="number"
                min="50"
                max="100"
                step="0.2"
                placeholder="0.8"
                value={inputs.sysLoss}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-6">
              <label>
                <b>Percentage on Load</b>
              </label>
              <br />
              <input
                id="batteryEff"
                type="number"
                min="10"
                max="100"
                step="5"
                placeholder="100"
                value={inputs.batteryEff}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="percentageContainer">
            <h3>Percentage Load% on Battery</h3>
            <div className="load-group">
              {[100, 90, 80, 70, 60, 50, 40, 30, 20, 10].map((val) => (
                <div
                  className={`load-item${selectedLoad === val ? " active" : ""}`}
                  key={val}
                  onClick={() => handleLoadSelect(val)}
                >
                  <button className="top-btn">{val}%</button>
                  <button className="bottom-btn"></button>
                </div>
              ))}
            </div>
          </div>

          <div className="btnbar" style={{ marginTop: 14 }}>
            <button id="compute" type="button" onClick={handleCompute}>
              Compute Array
            </button>
            <button id="reset" type="button" className="ghost" onClick={handleReset}>
              Reset
            </button>
            <button id="copy" type="button" className="ghost" onClick={handleQuotation}>
              Quotation
            </button>
          </div>
          {/* LOADING */}
          {loading && <div id="loading">⏳ Loading...</div>}
          {done && <div id="done">✅ Done</div>}
        </div>

        {/* RIGHT: Results (placeholder) */}
        <div className="card">
          <h2>Results</h2>
          <div className="out" id="results">
            {/* Results will be shown here after logic is ported */}
            <div className="stat">
              <div className="k">Load:</div>
              <div className="v" id="loadResult">—</div>
            </div>
            <div className="stat">
              <div className="k">Required PV array:</div>
              <div className="v" id="requiredPV">—</div>
              <div className="pv" id="pv">--</div>
            </div>
            <div className="stat">
              <div className="k">Panel count (rounded up):</div>
              <div className="v" id="pvNos">—</div>
              <div className="pvN" id="pvN"></div>
            </div>
            <div className="stat">
              <div className="k">Recommended Panel(W):</div>
              <div className="v" id="panelWatt">—</div>
              <div className="panelBrand" id="panelBrand">--</div>
            </div>
            <div className="stat">
              <div className="k">Estimated daily energy:</div>
              <div className="v" id="dailyEnergyGeneration">—</div>
              <div className="kwD" id="kwD">--</div>
            </div>
            <div className="stat">
              <div className="k">Status:</div>
              <div className="v" id="fitStatus">—</div>
              <div className="unit"></div>
            </div>
            <div className="stat">
              <div className="k">Inverter System:</div>
              <div className="v" id="inverterNos">—</div>
              <div className="requiredInverterO" id="requiredInverterO">MaxPower</div>
            </div>
            <div className="stat">
              <div className="k">Battery Sizing:</div>
              <div className="v" id="BatteryCapacity">—</div>
              <div className="checkingVolt" id="checkingVolt"></div>
            </div>
          </div>
          <div className="resultFooter">
            <hr style={{ border: "1px solid rgba(255,255,255,.1)" }} />
            <p className="aboutResult">
              For detailed system design and professional quotation, please use the
              "Quotation" button.
            </p>
            <hr style={{ border: "1px solid rgba(255,255,255,.1)" }} />
            <p>
              Developed by. <a href="https://github.com/EniolaAbdulQodir/MindThread_Ai">Abdulrasaq Eniola.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolBox;
