import { Shield, Zap, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Earthing = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-engineering-green/10 rounded-lg">
            <Shield className="h-8 w-8 text-engineering-green" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Earthing Systems</h1>
            <p className="text-muted-foreground">Ground fault protection and electrical safety</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-engineering-green" />
              Earthing Types
            </CardTitle>
            <CardDescription>Common grounding system configurations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">TN-S System</h3>
                <Badge variant="secondary">Recommended</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Separate neutral and protective earth conductors throughout the installation
              </p>
            </div>

            <div className="p-3 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">TN-C-S System</h3>
                <Badge variant="secondary">Common</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Combined neutral and earth (PEN) from supply, separated at consumer unit
              </p>
            </div>

            <div className="p-3 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">TT System</h3>
                <Badge variant="secondary">Rural</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Independent earth electrode at installation, isolated from supply earth
              </p>
            </div>

            <div className="p-3 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">IT System</h3>
                <Badge variant="secondary">Industrial</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Isolated or impedance-connected to earth, used in critical installations
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-engineering-blue" />
              Earth Resistance Testing
            </CardTitle>
            <CardDescription>Required measurements and standards</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div>
                <p className="font-medium">Electrode Resistance</p>
                <p className="text-sm text-muted-foreground">Maximum acceptable value</p>
              </div>
              <Badge variant="outline" className="bg-engineering-green/10 text-engineering-green">
                ≤ 1Ω
              </Badge>
            </div>

            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div>
                <p className="font-medium">Continuity Testing</p>
                <p className="text-sm text-muted-foreground">Protective conductor</p>
              </div>
              <Badge variant="outline" className="bg-engineering-green/10 text-engineering-green">
                ≤ 0.5Ω
              </Badge>
            </div>

            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div>
                <p className="font-medium">RCD Testing</p>
                <p className="text-sm text-muted-foreground">Trip time at rated current</p>
              </div>
              <Badge variant="outline" className="bg-engineering-green/10 text-engineering-green">
                ≤ 300ms
              </Badge>
            </div>

            <div className="p-3 bg-engineering-orange/10 border border-engineering-orange/20 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-engineering-orange mt-0.5" />
                <div>
                  <p className="font-medium text-engineering-orange">Testing Frequency</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Earth electrode resistance should be tested annually or after any modifications
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-engineering-green" />
            Installation Best Practices
          </CardTitle>
          <CardDescription>Guidelines for effective earthing systems</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-sm">Earth Electrode Installation</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-engineering-green mt-0.5 flex-shrink-0" />
                  <span>Install rods vertically to minimum 2.4m depth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-engineering-green mt-0.5 flex-shrink-0" />
                  <span>Use copper or copper-clad steel electrodes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-engineering-green mt-0.5 flex-shrink-0" />
                  <span>Ensure good soil contact and moisture levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-engineering-green mt-0.5 flex-shrink-0" />
                  <span>Multiple electrodes should be spaced adequately</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-sm">Bonding Requirements</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-engineering-green mt-0.5 flex-shrink-0" />
                  <span>Main bonding to water, gas, and oil services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-engineering-green mt-0.5 flex-shrink-0" />
                  <span>Supplementary bonding in locations with increased risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-engineering-green mt-0.5 flex-shrink-0" />
                  <span>Use appropriate conductor sizes per BS 7671</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-engineering-green mt-0.5 flex-shrink-0" />
                  <span>Label all bonding connections clearly</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-engineering-orange" />
            Safety Considerations
          </CardTitle>
          <CardDescription>Critical safety information for earthing systems</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-engineering-orange mt-0.5 flex-shrink-0" />
              <span>Never rely on water or gas pipes as the sole means of earthing</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-engineering-orange mt-0.5 flex-shrink-0" />
              <span>Ensure all exposed conductive parts are properly bonded to prevent potential differences</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-engineering-orange mt-0.5 flex-shrink-0" />
              <span>Regular testing and maintenance is essential for system reliability</span>
            </p>
            <p className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-engineering-orange mt-0.5 flex-shrink-0" />
              <span>Document all test results and keep records for inspection and audit purposes</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Earthing;
