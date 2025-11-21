import { Zap, AlertCircle, Settings, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Breaker = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-engineering-blue/10 rounded-lg">
            <Zap className="h-8 w-8 text-engineering-blue" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Circuit Breaker</h1>
            <p className="text-muted-foreground">Electrical protection and safety systems</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-engineering-blue" />
              Breaker Specifications
            </CardTitle>
            <CardDescription>Technical details and ratings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Voltage Rating:</span>
              <Badge variant="secondary">240V / 480V</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Current Rating:</span>
              <Badge variant="secondary">15A - 200A</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Breaking Capacity:</span>
              <Badge variant="secondary">10kA - 25kA</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Poles:</span>
              <Badge variant="secondary">1P, 2P, 3P, 4P</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-engineering-green" />
              Safety Features
            </CardTitle>
            <CardDescription>Protection mechanisms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-engineering-green mt-0.5" />
              <div>
                <p className="text-sm font-medium">Overcurrent Protection</p>
                <p className="text-xs text-muted-foreground">Trips on excessive current flow</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-engineering-green mt-0.5" />
              <div>
                <p className="text-sm font-medium">Short Circuit Protection</p>
                <p className="text-xs text-muted-foreground">Instant magnetic trip</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-engineering-green mt-0.5" />
              <div>
                <p className="text-sm font-medium">Arc Fault Detection</p>
                <p className="text-xs text-muted-foreground">Advanced AFCI technology</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-engineering-orange" />
            Installation Guidelines
          </CardTitle>
          <CardDescription>Important considerations for installation</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3 list-decimal list-inside">
            <li className="text-sm">Verify the breaker rating matches the circuit requirements</li>
            <li className="text-sm">Ensure proper torque settings for terminal connections</li>
            <li className="text-sm">Confirm correct bus bar alignment and insertion</li>
            <li className="text-sm">Test breaker operation before energizing the circuit</li>
            <li className="text-sm">Label all breakers clearly in the panel schedule</li>
            <li className="text-sm">Maintain adequate working clearances per NEC requirements</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default Breaker;
