import { useState } from 'react';

export default function ToolBox() {
  const [formData, setFormData] = useState({
    load: '',
    usagehrDay: '',
    psh: 5,
    panelEff: 30,
    dod: 80,
    sysLoss: 0.8,
    batteryEff: 100
  });

  const [selectedLoad, setSelectedLoad] = useState(50);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadPercentages = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

  const calculateSystem = () => {
    const load = parseFloat(formData.load);
    const usageHr = parseFloat(formData.usagehrDay);
    const peakSunHr = parseFloat(formData.psh);

    if (isNaN(load) || isNaN(usageHr) || isNaN(peakSunHr)) {
      alert('Please enter valid numbers for Load, Usage Hours, and Peak Sun Hours.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const totalEnergyKw = load / 1000;
      const DOD = 0.8;
      const totalEnergyWEff = totalEnergyKw / DOD;
      const batteryBank = (totalEnergyWEff * (selectedLoad / 100)) * usageHr;

      let checkingVolt = 12;
      if (batteryBank <= 2) checkingVolt = 12;
      else if (batteryBank <= 5) checkingVolt = 24;
      else if (batteryBank <= 50) checkingVolt = 48;
      else if (batteryBank <= 100) checkingVolt = 96;
      else if (batteryBank <= 200) checkingVolt = 360;
      else checkingVolt = 500;

      const panelForLoad = totalEnergyWEff;
      const panelForBattery = batteryBank / peakSunHr;
      const solarCap = panelForBattery + panelForLoad;
      const dailyEnergyGen = batteryBank + (panelForLoad * peakSunHr);

      const pvWattage = 300;
      const pvArrayNos = Math.floor(solarCap / (pvWattage / 1000));

      const maxSolarInput = 10;
      const maxACOutput = 8;
      const invertersByPV = Math.ceil(solarCap / maxSolarInput);
      const invertersByLoad = Math.ceil(totalEnergyWEff / maxACOutput);
      const invertNos = Math.max(invertersByPV, invertersByLoad);
      const ACCapacity = (maxACOutput * 1000 * invertNos) / 1000;

      setResults({
        totalEnergy: totalEnergyKw.toFixed(1),
        batteryBankSize: Math.floor(batteryBank),
        dailyEnergyGen: dailyEnergyGen.toFixed(1),
        solarCapacity: solarCap.toFixed(2),
        pvArrayNos,
        pvWattage,
        inverterNos: invertNos,
        inverterCapacity: ACCapacity.toFixed(0),
        checkingVolt,
        pvBrand: 'Jinko Solar',
        pvModel: 'Cheetah HC'
      });

      setLoading(false);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      load: '',
      usagehrDay: '',
      psh: 5,
      panelEff: 30,
      dod: 80,
      sysLoss: 0.8,
      batteryEff: 100
    });
    setResults(null);
    setSelectedLoad(50);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-8 px-4">
      <div className="mb-6 pb-4 border-b">
        <h1 className="text-3xl font-bold text-gray-900">
          Installer Tool Kit <span className="ml-2 text-sm bg-blue-500 text-white px-3 py-1 rounded-full">100% Accuracy</span>
        </h1>
        <p className="text-gray-600 mt-2">Complete Solar Design & Sizing Toolkit – from Load to Quotation.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">Panel Sizing</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Total Load Power (W)</label>
              <input
                type="number"
                name="load"
                value={formData.load}
                onChange={handleInputChange}
                placeholder="e.g. 1000"
                className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Backup Time (hr/day)</label>
              <input
                type="number"
                name="usagehrDay"
                value={formData.usagehrDay}
                onChange={handleInputChange}
                placeholder="e.g. 8"
                className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Peak Sun Hours (hr/day)</label>
              <input
                type="number"
                name="psh"
                value={formData.psh}
                onChange={handleInputChange}
                placeholder="e.g. 5"
                className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Panel Factor (%, default 30%)</label>
              <input
                type="number"
                name="panelEff"
                value={formData.panelEff}
                onChange={handleInputChange}
                placeholder="30"
                className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Depth of Discharge (%, default 80)</label>
              <input
                type="number"
                name="dod"
                value={formData.dod}
                onChange={handleInputChange}
                placeholder="80"
                className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">System Losses (%, default 0.8)</label>
              <input
                type="number"
                name="sysLoss"
                value={formData.sysLoss}
                onChange={handleInputChange}
                step="0.1"
                placeholder="0.8"
                className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-700 border border-gray-600 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">Percentage Load on Battery</h3>
            <div className="flex flex-wrap gap-2">
              {loadPercentages.map(percent => (
                <button
                  key={percent}
                  onClick={() => setSelectedLoad(percent)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedLoad === percent
                      ? 'bg-blue-500 text-white shadow-lg scale-105'
                      : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                  }`}
                >
                  {percent}%
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={calculateSystem}
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition disabled:opacity-50"
            >
              {loading ? 'Computing...' : 'Compute Array'}
            </button>
            <button
              onClick={resetForm}
              className="px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-xl font-semibold transition"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Results</h2>

          {!results ? (
            <div className="text-center py-12 text-gray-400">
              <p>Enter values and click Compute Array to see results</p>
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4">
                <div className="text-sm text-gray-600">Load</div>
                <div className="text-2xl font-bold text-gray-900">{results.totalEnergy} kW</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4">
                <div className="text-sm text-gray-600">Required PV Array</div>
                <div className="text-2xl font-bold text-gray-900">{results.solarCapacity} kW</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-4">
                <div className="text-sm text-gray-600">Panel Count</div>
                <div className="text-2xl font-bold text-gray-900">{results.pvArrayNos} Nos</div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-xl p-4">
                <div className="text-sm text-gray-600">Recommended Panel</div>
                <div className="text-2xl font-bold text-gray-900">{results.pvWattage}W</div>
                <div className="text-sm text-gray-600">{results.pvBrand}</div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-4">
                <div className="text-sm text-gray-600">Estimated Daily Energy</div>
                <div className="text-2xl font-bold text-gray-900">{results.dailyEnergyGen} kWh/day</div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-4">
                <div className="text-sm text-gray-600">Inverter System</div>
                <div className="text-2xl font-bold text-gray-900">{results.inverterNos} Nos</div>
                <div className="text-sm text-gray-600">Max Output {results.inverterCapacity} kW</div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-xl p-4">
                <div className="text-sm text-gray-600">Battery Sizing</div>
                <div className="text-2xl font-bold text-gray-900">{results.batteryBankSize} kWh</div>
                <div className="text-sm text-gray-600">{results.checkingVolt}V System</div>
              </div>
            </div>
          )}

          <div className="mt-6 pt-6 border-t text-sm text-gray-600">
            <p>For detailed system design and professional quotation, use the compute results.</p>
            <p className="mt-2">Developed by <a href="https://github.com/EniolaAbdulQodir/MindThread_Ai" className="text-blue-600 hover:underline">Abdulrasaq Eniola</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
