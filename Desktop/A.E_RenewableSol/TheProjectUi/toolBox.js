
let selectedLoadValue = null; // global variable

const loadItems = document.querySelectorAll('.load-item');

loadItems.forEach(item => {
  const topBtn = item.querySelector('.top-btn');
  const bottomBtn = item.querySelector('.bottom-btn');

  function activateItem() { 
    // Remove active from all
    loadItems.forEach(i => i.classList.remove('active'));

    // Mark this active
    item.classList.add('active');

    // Extract numeric percentage
    const valueText = topBtn.textContent.replace('%', '');
    selectedLoadValue = parseInt(valueText);

    // Show on UI
    // document.getElementById('selectedValue').textContent = selectedLoadValue + '%';
  }

  // Add listener once
  if (!item.hasAttribute('data-listener')) {
    topBtn.addEventListener('click', activateItem);
    bottomBtn.addEventListener('click', activateItem);
    item.setAttribute('data-listener', 'true');
  }
});



   
   
   function SolarKitEngineSystem(){
        // Get input values
      const totalEnergyUsage = parseFloat(document.getElementById('load').value);
      const usageHr = parseFloat(document.getElementById('usagehrDay').value);
      const peakSunHr = parseFloat(document.getElementById('psh').value);
      const panelFact = parseFloat(document.getElementById('panelEff').value);
      const DepthOfDischarge = parseFloat(document.getElementById('dod').value);
      const batteryEff = parseFloat(document.getElementById('batteryEff').value);
      const systemLosses = parseFloat(document.getElementById('sysLoss').value);
      // Validate inputs
      if (
        isNaN(totalEnergyUsage) ||
        isNaN(usageHr) ||
        isNaN(peakSunHr) ||
        isNaN(panelFact) ||
        isNaN(DepthOfDischarge) ||
        isNaN(batteryEff) ||
        isNaN(systemLosses)
      ) {
        alert("Please enter valid numbers for all fields.");
        return null;
      }

      // ----------------------------

        // Inverter Recommendation parameters
      const maxSolarInput = 10;  // kW DC input
      const maxACOutput = 8;     // kW AC output
      const systemLoss = 0.95;
      const inverterBrand = "Growatt";
      const inverterModel = "MIN 5000TL-X";
      const inverterPrice = 150000; // NGN

        // Panel Recommendation parameters
      const pvBrand = "Jinko Solar";
      const pvModel = "Cheetah HC ";
      const pvWattage = 300; // Watts per panel
      const panelFactor = 1.2; // Convert to kW

      //   Battery Recommendation parameters
      const batteryBrand = "LG Chem";
      const batteryModel = "RESU 10H";
      const batteryPrice = 50000; // NGN per kWh
      const DOD = 0.8;
      const batteryEfficiency = 0.8;


       // ------------------------------
         // Calculations
       // ------------------------------


       
      // Convert load to kWh
      const totalEnergyKw = (totalEnergyUsage / 1000);
      const totalEnergyWEff = (totalEnergyKw / DOD);
        //systemEff === 90%  

      // Battery-------
      // Battery bank sizing (kWh)
      const batteryBank = ((totalEnergyWEff * (selectedLoadValue / 100)) * (usageHr));
    //   0.9 === DOD
    //  0.9 === systemEff
    //   
         let checkingVolt;
        if (batteryBank <= 2) checkingVolt = 12;
        else if (batteryBank <= 5) checkingVolt = 24;
        else if (batteryBank <= 50) checkingVolt = 48;
        else if (batteryBank <= 100) checkingVolt = 96;
        else if (batteryBank <= 200) checkingVolt = 360;
        else checkingVolt = 500;

          // -------------ESTIMATE DAILY ENERGY -------------
         const selectedLoad = selectedLoadValue; // get selected load value

        //   panel for load
        const panelForLoad = (totalEnergyWEff);
        // sun === 80%
        // panelFact (derated Factor) === 82%
        //  panel for battery
        // batteryEff === 90%
        // inverterEff === 90%
        // systemLoss === 95%
        const panelForBattery = batteryBank / (peakSunHr);  

          const solarCap = ((panelForBattery) + (panelForLoad)); // Total solar capacity in kW

      const dailyEnergyGen = (batteryBank)+ (panelForLoad * peakSunHr); // Daily energy consumption in kWh

     

          // ------------- SOLAR ARRAY CALCULATION -----------
      // PV needed for charging battery and supplying load (kW)
     

         // ----------- PANEL COUNT ROUND UP -----------
        //  -----
      const pvArrayNos = (solarCap) / (pvWattage / 1000);

         // ------------- INVERTER ----------------
      // 5. Inverter sizing
      const invertersByPV = Math.ceil(solarCap / maxSolarInput);
      const invertersByLoad = Math.ceil((totalEnergyWEff) / maxACOutput);
      const invertNos = Math.floor(invertersByPV, invertersByLoad);
      const ACCapacity = ((maxACOutput * 1000) * invertNos) / 1000;
      /////////////////

     



      return{
        // backupPercentage: value,
        inverterBrand: inverterBrand,
        inverterModel: inverterModel,
        inverterPrice: inverterPrice,
        pvBrand: pvBrand,
        pvModel: pvModel,
        pvWattage: pvWattage,
        batteryBrand: batteryBrand,
        batteryModel: batteryModel,
        batteryPrice: batteryPrice,
        totalEnergy: (totalEnergyKw).toFixed(1),
        batteryBankSize: Math.floor((batteryBank)),
        dailyEnergyGeneneration: (dailyEnergyGen).toFixed(1),
        solarCapacity: (solarCap),
        pvArrayNos:Math.floor(pvArrayNos),
        inverterNos: invertNos,
        inverterCapacity: (ACCapacity).toFixed(0),
        checkingVolt: checkingVolt,
        selectedLoad: selectedLoad, // returns numeric only
        totalEnergyWEff:(totalEnergyWEff)
        
      }
    }

    function computeArray(){
     const result = SolarKitEngineSystem();
      if(!result) return;

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
        document.getElementById("panelWatt").innerHTML = result.pvWattage + "W";
        document.getElementById("panelBrand").innerHTML = result.pvBrand;
        document.getElementById("loadResult").innerHTML = result.totalEnergy + "Kw";
        document.getElementById("BatteryCapacity").innerHTML = result.batteryBankSize + "KwHr";
        document.getElementById("checkingVolt").innerHTML = result.checkingVolt + 'Volt';
        document.getElementById("dailyEnergyGeneration").innerHTML = result.dailyEnergyGeneneration + " kW/day";
        document.getElementById("kwD").innerHTML = "kW/day";
        document.getElementById("requiredPV").innerHTML = result.solarCapacity + "KW";
        document.getElementById("pv").innerHTML = "Pv_Kwatt Required.";
        document.getElementById("pvNos").innerHTML = result.pvArrayNos + "Nos";
        document.getElementById("pvN").innerHTML = result.pvArrayNos + "Units." + result.pvModel ;
        document.getElementById("inverterNos").innerHTML = result.inverterNos + "Nos";
        document.getElementById("requiredInverterO").innerHTML = "MaxOutput" + result.inverterCapacity + 'KwP';
        document.getElementById("selectedValue").innerHTML = result.selectedLoad;

      }, 3000); // adjust delay in ms

    }

 function quotation(){

   const loading = document.getElementById("loading");
    const done = document.getElementById("done");
    const quotationPage = document.querySelector('.quotation');

  const result = SolarKitEngineSystem();
  if(!result)return;

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
        }, 1000);

  //--------- Table----------
  document.getElementById("ArrayBrand").innerHTML = result.pvBrand
  document.getElementById("arrayModel").innerHTML = result.pvModel
  document.getElementById("requiredArray").innerHTML = result.solarCapacity + "KwG";
  document.getElementById("pvSpecInc").innerHTML =
  "✔"

  document.getElementById("systemBrand").innerHTML = result.inverterBrand
  document.getElementById("systemModel").innerHTML = result.inverterModel
  document.getElementById("systemRequire").innerHTML = result.inverterCapacity;
  document.getElementById("maxP").innerHTML = "MaxP"
  document.getElementById("systemSpecInc").innerHTML = "✔"

  document.getElementById("batteryBrand").innerHTML = "Felicity"
  document.getElementById("batteryModel").innerHTML =  "Lithium2E2D"
  document.getElementById("RequiredBattery").innerHTML =result.batteryBankSize;
  document.getElementById("kwP").innerHTML = "KwP"
  document.getElementById("batterySpecInc").innerHTML = "✔"

  document.getElementById("mountingStructure").innerHTML = "Mounting Structure"
  document.getElementById("MountinSBrandi").innerHTML = "Would be determine "
  document.getElementById("MountingBrandii").innerHTML = "at the sight"
  document.getElementById("MountingSRequiredi").innerHTML = "Would be determine"
  document.getElementById("MountingSRequiredii").innerHTML = "at the site"
  document.getElementById("mountingStructureInc").innerHTML = "👩‍🔬"

  document.getElementById("mountingStructure").innerHTML = "Mounting Structure"
  document.getElementById("CableBrandi").innerHTML = "Would be determine "
  document.getElementById("CableBrandii").innerHTML = "at the sight"
  document.getElementById("cableModeli").innerHTML = "Would be determine"
  document.getElementById("cableModelii").innerHTML = "at the site"
  document.getElementById("cablingInc").innerHTML = "👩‍🔬"

  document.getElementById("ProtectionRequired").innerHTML = "40k";
  document.getElementById("MSC").innerHTML = 'MSC';
  document.getElementById("Light").innerHTML = "20k"
  document.getElementById("NSC").innerHTML = "NSC";
  document.getElementById("strike").innerHTML = "≤2.2Kv"
  document.getElementById("VPL").innerHTML= "VPL";
  document.getElementById("protectionDeviceInc").innerHTML = "✔"
  // document.getElementById("pvSpecPrice").innerHTML =




  // analyses Calculation && Formular....
// Math.ceil(result.batteryBankSize / (result.selectedLoad * 0.5))
  // 50% Load Calculation
  // const batteryBank = ((totalEnergyWEff * (selectedLoadValue / 100)) * (usageHr));
  const selectedLoad = selectedLoadValue
  const HLT =  result.batteryBankSize / ( (selectedLoad / 100) * result.totalEnergyWEff)  //


  // Emmisions Saved Per Year
  const emission = 0.42; // kg CO2 per kWh 


    document.getElementById("selectedValue%").innerHTML = result.selectedLoad +"%";
    document.getElementById("generatedEnergy").innerHTML = result.dailyEnergyGeneneration;
    document.getElementById("backupTime").innerHTML = HLT ;
    //  document.getElementById("billSaving").innerHTML = annualBSavings
        document.getElementById('co2Savings').innerText = (result.dailyEnergyGeneneration * emission).toFixed(2) + " kg CO₂";


    document.getElementById("systemCapacity").innerHTML = result.inverterCapacity + "kwPower /";
    document.getElementById("batteryCapacity").innerHTML = result.batteryBankSize + "KwhrBank";

      }, 5000); // Simulated delay
 }


  