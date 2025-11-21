import { FileCheck, Award, Calendar, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Certificate = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-engineering-green/10 rounded-lg">
            <FileCheck className="h-8 w-8 text-engineering-green" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Certificates & Documentation</h1>
            <p className="text-muted-foreground">Compliance and certification management</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Award className="h-5 w-5 text-engineering-green" />
              Active
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-engineering-green">12</div>
            <p className="text-sm text-muted-foreground mt-1">Valid certificates</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5 text-engineering-orange" />
              Expiring Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-engineering-orange">3</div>
            <p className="text-sm text-muted-foreground mt-1">Within 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <User className="h-5 w-5 text-primary" />
              Personnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">8</div>
            <p className="text-sm text-muted-foreground mt-1">Certified engineers</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Required Certifications</CardTitle>
          <CardDescription>Industry standard certifications for electrical work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">Electrical Installation Certificate (EIC)</h3>
                <p className="text-sm text-muted-foreground">BS 7671 compliant installation records</p>
              </div>
              <Badge variant="outline" className="bg-engineering-green/10 text-engineering-green border-engineering-green">
                Valid
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">Minor Electrical Installation Works Certificate</h3>
                <p className="text-sm text-muted-foreground">For additions or alterations to existing installations</p>
              </div>
              <Badge variant="outline" className="bg-engineering-green/10 text-engineering-green border-engineering-green">
                Valid
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">Electrical Installation Condition Report (EICR)</h3>
                <p className="text-sm text-muted-foreground">Periodic inspection and testing</p>
              </div>
              <Badge variant="outline" className="bg-engineering-orange/10 text-engineering-orange border-engineering-orange">
                Expires Soon
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">PAT Testing Certificate</h3>
                <p className="text-sm text-muted-foreground">Portable appliance testing records</p>
              </div>
              <Badge variant="outline" className="bg-engineering-green/10 text-engineering-green border-engineering-green">
                Valid
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button className="bg-engineering-blue hover:bg-engineering-blue/90">
          <FileCheck className="h-4 w-4 mr-2" />
          Generate Certificate
        </Button>
        <Button variant="outline">
          View Archive
        </Button>
      </div>
    </div>
  );
};

export default Certificate;
