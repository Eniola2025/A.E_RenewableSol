

function solarSystemCalculator() {
    // ---------------- INPUTS ----------------
    const load = parseFloat(document.getElementById("load").value);              // Load in Watts
    const usageHour = parseFloat(document.getElementById("usagehrDay").value);  // Usage in hours/day
    const peakSunHours = parseFloat(document.getElementById("psh").value);    // PSH hours/day

    // ---------------
    const panelEffInput = parseFloat(document.getElementById("panelEff").value); // Panel efficiency %
    const dodInput = parseFloat(document.getElementById("dod").value);           // Depth of Discharge %
    const battEffInput = parseFloat(document.getElementById("batteryEff").value);   // Battery efficiency %
    const sysLossInput = parseFloat(document.getElementById("sysLoss").value);   // System Losses %


    // Validate inputs
    if (isNaN(load) || isNaN(usageHour) || isNaN(peakSunHours)) {
        alert("⚠️ Please enter valid numbers for Load, Usage Hours, and Peak Sun Hours.");
        return null;
    }

    // ---------------- CONSTANTS ----------------
    // Panel efficiency (%)---------(1)
    // Convert to multiplier (e.g. 30% => 1.2)
    const panelFactorDecimal = (isNaN(panelEffInput) || panelEffInput < 0) 
    ? 1.2 
    : 1 + (panelEffInput / 100);
    // convert % to decimal (0.9) ---------(2)
    const DoD = (isNaN(dodInput) || dodInput <= 0 || dodInput > 100) ? 90 : dodInput; 
    const DoDdecimal = DoD / 100;
    // Battery efficiency -----(3)
    const batteryEff = (isNaN(battEffInput) || battEffInput <= 0 || battEffInput > 100) ? 90 : battEffInput;
    const batteryEffDecimal = batteryEff / 100;
    // 0.9% system loss  -----(4)
    const systemLoss = (isNaN(sysLossInput) || sysLossInput <= 0 || sysLossInput > 100) ? 90 : sysLossInput;
    const systemLossDecimal = systemLoss / 100; 
    // Max solar input per inverter and max AC output per inverter
    const maxSolarInput = 10;  // kW
    const maxACOutput = 8; 


    // ------------- LOAD CALCULATION --------------
        const loadW = (load) / 1000; // in kWh

    // ------------ BATTERY CALCULATION --------------
          // Decide system voltage based on load
        let checkingVolt;
        if (load <= 1200) checkingVolt = 12;
        else if (load <= 2500) checkingVolt = 24;
        else if (load <= 10000) checkingVolt = 48;
        else checkingVolt = 96; // very large systems

        // Battery capacity in Ah
        const batteryCapacityKWh = (loadW * usageHour) / (systemLossDecimal * batteryEffDecimal * DoDdecimal);

 
    // -------------ESTIMATE DAILY ENERGY -------------
        const dailyEnergyGen = batteryCapacityKWh + (load * peakSunHours) / 1000; // Daily energy consumption in kWh

    // ------------- SOLAR ARRAY CALCULATION -----------
    // PV needed for charging battery and supplying load (kW)
        const pvForBattery = (batteryCapacityKWh) / (peakSunHours);
        const solarCap = (pvForBattery + loadW) * panelFactorDecimal; // Total solar capacity in kW

    // ----------- PANEL COUNT ROUND UP -----------
     // Convert kW solar capacity to watts
        const solarCapW = solarCap * 1000;

        // Define possible panel wattages between 300 and 600
        const panelOptions = [600, 550, 500, 450, 400, 350, 300];

        // Track best match
        let best = { panelW: null, panelNos: null, totalW: null, diff: Infinity };

        panelOptions.forEach(panelW => {
            const nos = Math.ceil(solarCapW / panelW);
            const totalW = nos * panelW;
            const diff = totalW - solarCapW;

            // Choose the best option:
            // 1. Prefer even number of panels
            // 2. Prefer fewer panels (larger wattage)
            // 3. Prefer smallest oversize (diff)
            if (
                nos % 2 === 0 && 
                (best.panelNos === null || nos < best.panelNos || 
                (nos === best.panelNos && diff < best.diff))
            ) {
                best = { panelW, panelNos: nos, totalW, diff };
            }
        });
    // ------------- INVERTER ----------------
            // 5. Inverter sizing
        const invertersByPV = Math.ceil(solarCap / maxSolarInput);
        const invertersByLoad = Math.ceil((load / 1000) / maxACOutput);

        const inverterNos = Math.max(invertersByPV, invertersByLoad);

    // ------------ CALCULATION STATUS-----------


    return {
        power: loadW,  // kWh
        solarCap: solarCap.toFixed(2), // kW
        panelCount: best.panelNos,
        panelWatt: best.panelW,
        dailyEnergyGen: (solarCap * peakSunHours * systemLossDecimal).toFixed(1), 
        inverterCount: inverterNos,
        maxACOutput: maxACOutput, 
        batteryCapacity: batteryCapacityKWh.toFixed(1),
        unit: checkingVolt // system voltage
    };
 


}

function computeArray() {
    const result = solarSystemCalculator();
    if (!result) return;

    const loading = document.getElementById("loading");
    const done = document.getElementById("done");

    // Show loading
    loading.style.display = "block";
    done.style.display = "none";

    // Simulate processing delay (e.g., 3 seconds)
    setTimeout(() => {
        // Hide loading, show done
        loading.style.display = "none";
        done.style.display = "block";

        // Hide "done" after 1.5 seconds
        setTimeout(() => {
            done.style.display = "none";
        }, 1500);

        // Display results in HTML
        // document.getElementById("load").innerText =  " kW";
          document.getElementById("panelWatt").innerHTML = result.pvWattage +"W";
      document.getElementById("panelBrand").innerHTML = result.pvBrand ;
      document.getElementById("loadResult").innerHTML = result.totalEnergy + "Kw";
      document.getElementById("BatteryCapacity").innerHTML = result.batteryBankSize + "KwHr";
      document.getElementById("dailyEnergyGeneration").innerHTML = result.dailyEnergyGeneneration + " kWh/day";
      document.getElementById("requiredPV").innerHTML = result.solarCapacity +"KW";
      document.getElementById("pvNos").innerHTML = result.pvArrayNos +"Nos";
      document.getElementById("inverterNos").innerHTML = result.inverterNos +"Nos";
      document.getElementById("requiredInverter").innerHTML = "MaxOutput" + result.inverterCapacity + 'KwP';

    }, 3000); // adjust delay in ms
}


function resetInputs() {
    // Reset all displayed values
    ["energy", "HourEnergy", "panelNos", "recomPanel", "dailyEnergy", "inverter", "battery"]
        .forEach(id => document.getElementById(id).innerText = "—");
}

// ------------- QUOTATION GENERATION --------------
function quotation() {
    const loading = document.getElementById("loading");
    const done = document.getElementById("done");
    const quotationPage = document.querySelector('.quotation');

    const result = solarSystemCalculator();
    if (!result) {
        alert("Error: Unable to generate quotation");
        return;
    }

    // Show loading sign
    loading.style.display = "block";
    done.style.display = "none";
    quotationPage.style.display = "none";

    // Simulate processing (quotation calculation)
    setTimeout(() => {
        // When done, hide loading and show page
        loading.style.display = "none";
        done.style.display = "block";

        quotationPage.style.display = "block";
        setTimeout(() => {
            quotationPage.classList.add("show");
        }, 50);

        // Hide "done" after 2s
        setTimeout(() => {
            done.style.display = "none";
        }, 2000);

        // --- PV SECTION ---
        const pvPrice = 125000; // per panel
        document.getElementById('recomendedPv').innerText = "Jinko";
        document.getElementById('PvWatt').innerText = "555 W";
        document.getElementById('PvNos').innerText = result.panelNos;
        document.getElementById('PvPrice').innerText =
            "₦" + (pvPrice * (parseInt(result.panelNos) || 0)).toLocaleString();

        // --- INVERTER SECTION ---
        const inverterPrice = 830000; // per inverter
        document.getElementById('recomendedInverter').innerText = "Felicity";
        document.getElementById('InverterCapacity').innerText = result.maxACOutput + " kW";
        document.getElementById('InverterNos').innerText = result.inverterCount;
        document.getElementById('InverterPrice').innerText =
            "₦" + (inverterPrice * (parseInt(result.inverterCount) || 0)).toLocaleString();

        // --- BATTERY SECTION ---
        const batteryPrice = 1900000; // per 10 kWh battery
        const batteryNos = Math.ceil((parseFloat(result.batteryCapacity) || 0) / 10);
        document.getElementById('recomemendedBattery').innerText = "Felicity";
        document.getElementById('BatteryCapacity').innerText = result.batteryCapacity + " kWh";
        document.getElementById('BatteryNos').innerText = batteryNos;
        document.getElementById('BatteryPrice').innerText =
            "₦" + (batteryPrice * batteryNos).toLocaleString();

        // --- MOUNTING STRUCTURE ---
        const panel_Rail = 6000,
            mc4_Connectors = 1000,
            trunking = 5500,
            black_screw = 10000,
            bolt_nut = 400;

        const rules = [
            { max: 5, mc4: 2, rail: 2, trunk: 2, screw: 1, bolt: 14 },
            { max: 10, mc4: 2, rail: 4, trunk: 2, screw: 1, bolt: 24 },
            { max: 15, mc4: 4, rail: 6, trunk: 2, screw: 1, bolt: 32 },
            { max: 20, mc4: 4, rail: 8, trunk: 2, screw: 2, bolt: 42 },
            { max: 25, mc4: 6, rail: 10, trunk: 2, screw: 2, bolt: 52 }
        ];

        const solarCap = parseFloat(result.solarCap) || 0;
        let rule = rules.find(r => solarCap <= r.max);

        if (!rule) {
            const lastRule = rules[rules.length - 1];
            const extraSteps = Math.ceil((solarCap - lastRule.max) / 5);
            rule = {
                mc4: lastRule.mc4 + extraSteps * 2,
                rail: lastRule.rail + extraSteps * 2,
                trunk: lastRule.trunk + extraSteps,
                screw: lastRule.screw + Math.ceil(extraSteps / 2),
                bolt: lastRule.bolt + extraSteps * 10
            };
        }

        const mountingPrice =
            (rule.mc4 * mc4_Connectors) +
            (rule.rail * panel_Rail) +
            (rule.trunk * trunking) +
            (rule.screw * black_screw) +
            (rule.bolt * bolt_nut);

        document.getElementById('mountingStructurePrice').innerText =
            "₦" + mountingPrice.toLocaleString();

        // --- PERFORMANCE ESTIMATES ---
        document.getElementById('dailyEnergyGeneration').innerText = result.dailyEnergyGen + " kWh/day";
        document.getElementById('backupTime').innerText = result.batteryCapacity / (result.energy / 2) + " hours";

        const Unit = 225;
        const billSaving = Math.ceil((result.dailyEnergyGen * Unit) * 365);
        document.getElementById('billSaving').innerText = billSaving.toLocaleString() + " Yearly";

        const emission = 0.42; // kg CO2 per kWh
        document.getElementById('co2Savings').innerText = (result.dailyEnergyGen * emission).toFixed(2) + " kg CO₂";
    }, 7000); // Simulated delay
}
