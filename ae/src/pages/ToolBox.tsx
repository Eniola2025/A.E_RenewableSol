import { useState } from "react";
import { Settings, Zap, Calculator } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface CalculationResult {
  // Panel results
  panelCapacity: number;
  panelCount: number;
  panelBrand: string;
  panelModel: string;
  panelWattage: number;
  panelCost: number;
  
  // Inverter results
  inverterCapacity: number;
  inverterCount: number;
  inverterBrand: string;
  inverterModel: string;
  inverterCost: number;
  
  // Battery results
  batteryCapacityKWh: number;
  batteryCapacityAh: number;
  batteryCount: number;
  batteryBrand: string;
  batteryModel: string;
  batteryCost: number;
  systemVoltage: number;
  
  // Totals
  totalCost: number;
}

const ToolBox = () => {
  // Input states
  const [load, setLoad] = useState<string>("1000");
  const [usageHr, setUsageHr] = useState<string>("8");
  const [peakSunHr, setPeakSunHr] = useState<string>("5");
  const [panelEff, setPanelEff] = useState<string>("30");
  const [dod, setDod] = useState<string>("80");
  const [batteryEff, setBatteryEff] = useState<string>("90");
  const [sysLoss, setSysLoss] = useState<string>("90");
  
  // Result state
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateSystem = () => {
    // Parse inputs
    const totalEnergyUsage = parseFloat(load);
    const usageHrValue = parseFloat(usageHr);
    const peakSunHrValue = parseFloat(peakSunHr);
    const panelFactValue = parseFloat(panelEff);
    const dodValue = parseFloat(dod);
    const batteryEffValue = parseFloat(batteryEff);
    const systemLossValue = parseFloat(sysLoss);

    // Validate inputs
    if (
      isNaN(totalEnergyUsage) ||
      isNaN(usageHrValue) ||
      isNaN(peakSunHrValue) ||
      isNaN(panelFactValue) ||
      isNaN(dodValue) ||
      isNaN(batteryEffValue) ||
      isNaN(systemLossValue)
    ) {
      toast.error("Please enter valid numbers for all fields");
      return;
    }

    // Constants
    const maxSolarInput = 10; // kW DC input
    const maxACOutput = 8; // kW AC output
    const inverterBrand = "Growatt";
    const inverterModel = "MIN 5000TL-X";
    const inverterPrice = 150000; // NGN

    const pvBrand = "Jinko Solar";
    const pvModel = "Cheetah HC";
    const pvWattage = 300; // Watts per panel

    const batteryBrand = "LG Chem";
    const batteryModel = "RESU 10H";
    const batteryCapacityPerUnit = 200; // Ah
    const batteryVoltage = 12; // V
    const batteryPricePerUnit = 80000; // NGN

    // Convert percentages to decimals
    const panelFactorDecimal = 1 + (panelFactValue / 100);
    const dodDecimal = dodValue / 100;
    const batteryEffDecimal = batteryEffValue / 100;
    const systemLossDecimal = systemLossValue / 100;

    // Load calculation
    const loadW = totalEnergyUsage / 1000; // in kWh

    // Determine system voltage based on load
    let systemVoltage;
    if (totalEnergyUsage <= 1200) systemVoltage = 12;
    else if (totalEnergyUsage <= 2500) systemVoltage = 24;
    else if (totalEnergyUsage <= 10000) systemVoltage = 48;
    else systemVoltage = 96;

    // Battery capacity calculation
    const batteryCapacityKWh =
      (loadW * usageHrValue) / (systemLossDecimal * batteryEffDecimal * dodDecimal);
    const batteryCapacityAh = (batteryCapacityKWh * 1000) / systemVoltage;

    // Number of batteries
    const batteryCount = Math.ceil(batteryCapacityAh / batteryCapacityPerUnit);
    const batteryCost = batteryCount * batteryPricePerUnit;

    // Panel calculation
    const dailyEnergy = (loadW * usageHrValue) / systemLossDecimal;
    const panelCapacity = (dailyEnergy / peakSunHrValue) * panelFactorDecimal;
    const panelCount = Math.ceil((panelCapacity * 1000) / pvWattage);
    const panelCost = panelCount * 45000; // NGN per panel

    // Inverter calculation
    const inverterCapacity = totalEnergyUsage / 1000; // kW
    const inverterCount = Math.ceil(inverterCapacity / maxACOutput);
    const inverterCost = inverterCount * inverterPrice;

    // Total cost
    const totalCost = panelCost + inverterCost + batteryCost;

    const calculationResult: CalculationResult = {
      panelCapacity,
      panelCount,
      panelBrand: pvBrand,
      panelModel: pvModel,
      panelWattage: pvWattage,
      panelCost,
      inverterCapacity,
      inverterCount,
      inverterBrand,
      inverterModel,
      inverterCost,
      batteryCapacityKWh,
      batteryCapacityAh,
      batteryCount,
      batteryBrand,
      batteryModel,
      batteryCost,
      systemVoltage,
      totalCost,
    };

    setResult(calculationResult);
    toast.success("Calculation completed successfully!");
  };

  const resetCalculator = () => {
    setLoad("1000");
    setUsageHr("8");
    setPeakSunHr("5");
    setPanelEff("30");
    setDod("80");
    setBatteryEff("90");
    setSysLoss("90");
    setResult(null);
    toast.info("Calculator reset");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Settings className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">
              Installer Tool Kit
            </h1>
            <Badge variant="secondary">100% Accuracy</Badge>
          </div>
          <p className="text-muted-foreground">
            Complete Solar Design & Sizing Toolkit – from Load to Quotation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Panel Sizing Input
              </CardTitle>
              <CardDescription>
                Enter your system parameters to calculate solar requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="load">Total Load Power (W)</Label>
                  <Input
                    id="load"
                    type="number"
                    value={load}
                    onChange={(e) => setLoad(e.target.value)}
                    placeholder="e.g. 1000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="usageHr">Backup Time (hr/day)</Label>
                  <Input
                    id="usageHr"
                    type="number"
                    value={usageHr}
                    onChange={(e) => setUsageHr(e.target.value)}
                    placeholder="e.g. 8"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="peakSunHr">Peak Sun Hours (hr/day)</Label>
                  <Input
                    id="peakSunHr"
                    type="number"
                    value={peakSunHr}
                    onChange={(e) => setPeakSunHr(e.target.value)}
                    placeholder="e.g. 5"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="panelEff">Panel Factor (%)</Label>
                  <Input
                    id="panelEff"
                    type="number"
                    value={panelEff}
                    onChange={(e) => setPanelEff(e.target.value)}
                    placeholder="e.g. 30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dod">Depth of Discharge (%)</Label>
                  <Input
                    id="dod"
                    type="number"
                    value={dod}
                    onChange={(e) => setDod(e.target.value)}
                    placeholder="e.g. 80"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="batteryEff">Battery Efficiency (%)</Label>
                  <Input
                    id="batteryEff"
                    type="number"
                    value={batteryEff}
                    onChange={(e) => setBatteryEff(e.target.value)}
                    placeholder="e.g. 90"
                  />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="sysLoss">System Losses (%)</Label>
                  <Input
                    id="sysLoss"
                    type="number"
                    value={sysLoss}
                    onChange={(e) => setSysLoss(e.target.value)}
                    placeholder="e.g. 90"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={calculateSystem} className="flex-1">
                  <Zap className="mr-2 h-4 w-4" />
                  Calculate System
                </Button>
                <Button onClick={resetCalculator} variant="outline">
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card>
            <CardHeader>
              <CardTitle>Calculation Results</CardTitle>
              <CardDescription>
                Your solar system sizing recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  {/* Solar Panel Results */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Solar Panels</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Brand:</div>
                      <div className="font-medium">{result.panelBrand}</div>
                      <div className="text-muted-foreground">Model:</div>
                      <div className="font-medium">{result.panelModel}</div>
                      <div className="text-muted-foreground">Capacity:</div>
                      <div className="font-medium">{result.panelCapacity.toFixed(2)} kW</div>
                      <div className="text-muted-foreground">Panel Count:</div>
                      <div className="font-medium">{result.panelCount} × {result.panelWattage}W</div>
                      <div className="text-muted-foreground">Cost:</div>
                      <div className="font-medium text-primary">
                        ₦{result.panelCost.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Inverter Results */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Inverter</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Brand:</div>
                      <div className="font-medium">{result.inverterBrand}</div>
                      <div className="text-muted-foreground">Model:</div>
                      <div className="font-medium">{result.inverterModel}</div>
                      <div className="text-muted-foreground">Capacity:</div>
                      <div className="font-medium">{result.inverterCapacity.toFixed(2)} kW</div>
                      <div className="text-muted-foreground">Count:</div>
                      <div className="font-medium">{result.inverterCount}</div>
                      <div className="text-muted-foreground">Cost:</div>
                      <div className="font-medium text-primary">
                        ₦{result.inverterCost.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Battery Results */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Battery</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Brand:</div>
                      <div className="font-medium">{result.batteryBrand}</div>
                      <div className="text-muted-foreground">Model:</div>
                      <div className="font-medium">{result.batteryModel}</div>
                      <div className="text-muted-foreground">Capacity:</div>
                      <div className="font-medium">
                        {result.batteryCapacityKWh.toFixed(2)} kWh ({result.batteryCapacityAh.toFixed(0)} Ah)
                      </div>
                      <div className="text-muted-foreground">System Voltage:</div>
                      <div className="font-medium">{result.systemVoltage}V</div>
                      <div className="text-muted-foreground">Count:</div>
                      <div className="font-medium">{result.batteryCount}</div>
                      <div className="text-muted-foreground">Cost:</div>
                      <div className="font-medium text-primary">
                        ₦{result.batteryCost.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Total Cost */}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total System Cost:</span>
                      <span className="text-2xl font-bold text-primary">
                        ₦{result.totalCost.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full min-h-[300px] text-center">
                  <div className="space-y-2">
                    <Calculator className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Enter your system parameters and click "Calculate System" to see results
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ToolBox;
