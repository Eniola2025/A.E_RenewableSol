import { Box, Package, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Kit = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Box className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Equipment Kits</h1>
            <p className="text-muted-foreground">Standard electrical installation kits and inventory</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Package className="h-4 w-4" />
              Total Kits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground mt-1">Available kits</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-engineering-green" />
              In Stock
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-engineering-green">12</div>
            <p className="text-xs text-muted-foreground mt-1">Ready to use</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-engineering-orange" />
              Low Stock
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-engineering-orange">3</div>
            <p className="text-xs text-muted-foreground mt-1">Need reorder</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Installation Kit - Residential</CardTitle>
            <CardDescription>Standard residential electrical installation kit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Kit ID:</span>
                <Badge variant="secondary">RES-001</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Status:</span>
                <Badge variant="outline" className="bg-engineering-green/10 text-engineering-green">In Stock</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Quantity:</span>
                <span className="font-medium">5 units</span>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm font-medium mb-2">Contains:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Wire strippers and cutters</li>
                  <li>• Screwdrivers set (flathead & Phillips)</li>
                  <li>• Voltage tester</li>
                  <li>• Cable ties and clips</li>
                  <li>• Electrical tape</li>
                  <li>• Wire connectors assortment</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Installation Kit - Commercial</CardTitle>
            <CardDescription>Commercial and industrial installation kit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Kit ID:</span>
                <Badge variant="secondary">COM-002</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Status:</span>
                <Badge variant="outline" className="bg-engineering-green/10 text-engineering-green">In Stock</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Quantity:</span>
                <span className="font-medium">3 units</span>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm font-medium mb-2">Contains:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Heavy-duty wire cutters</li>
                  <li>• Conduit bender</li>
                  <li>• Fish tape (25m)</li>
                  <li>• Cable pulling lubricant</li>
                  <li>• Crimping tool set</li>
                  <li>• Measuring tape (10m)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Testing & Inspection Kit</CardTitle>
            <CardDescription>Comprehensive testing equipment kit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Kit ID:</span>
                <Badge variant="secondary">TEST-003</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Status:</span>
                <Badge variant="outline" className="bg-engineering-green/10 text-engineering-green">In Stock</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Quantity:</span>
                <span className="font-medium">4 units</span>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm font-medium mb-2">Contains:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Multifunction tester</li>
                  <li>• RCD tester</li>
                  <li>• Earth loop impedance tester</li>
                  <li>• Insulation resistance tester</li>
                  <li>• Clamp meter</li>
                  <li>• Proving unit</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Safety Equipment Kit</CardTitle>
            <CardDescription>Personal protective equipment and safety gear</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Kit ID:</span>
                <Badge variant="secondary">SAFE-004</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Status:</span>
                <Badge variant="outline" className="bg-engineering-orange/10 text-engineering-orange border-engineering-orange">Low Stock</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Quantity:</span>
                <span className="font-medium">2 units</span>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm font-medium mb-2">Contains:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Safety glasses and goggles</li>
                  <li>• Insulated gloves (rated)</li>
                  <li>• Hard hat</li>
                  <li>• High-visibility vest</li>
                  <li>• Safety footwear</li>
                  <li>• First aid kit</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-engineering-orange" />
            Kit Maintenance Schedule
          </CardTitle>
          <CardDescription>Regular inspection and maintenance requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Weekly Inspection</p>
                <p className="text-sm text-muted-foreground">Visual check of all tools and equipment</p>
              </div>
              <Badge variant="outline" className="bg-engineering-green/10 text-engineering-green">Up to Date</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Monthly Calibration</p>
                <p className="text-sm text-muted-foreground">Testing equipment calibration check</p>
              </div>
              <Badge variant="outline" className="bg-engineering-orange/10 text-engineering-orange">Due in 5 days</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Quarterly Inventory</p>
                <p className="text-sm text-muted-foreground">Complete stock count and assessment</p>
              </div>
              <Badge variant="outline" className="bg-engineering-green/10 text-engineering-green">Completed</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Kit;
