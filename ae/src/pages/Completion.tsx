import { ClipboardCheck, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Completion = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-engineering-green/10 rounded-lg">
            <ClipboardCheck className="h-8 w-8 text-engineering-green" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Project Completion</h1>
            <p className="text-muted-foreground">Track and manage project progress</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-engineering-green" />
              Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-engineering-green">18</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-engineering-blue" />
              In Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-engineering-blue">5</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-engineering-orange" />
              Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-engineering-orange">1</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
          <CardDescription>Current project status and completion rates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-semibold">Building A - Electrical Installation</h3>
                <p className="text-sm text-muted-foreground">Commercial Office Complex</p>
              </div>
              <Badge variant="outline" className="bg-engineering-blue/10 text-engineering-blue">In Progress</Badge>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-semibold">Industrial Panel Upgrade</h3>
                <p className="text-sm text-muted-foreground">Manufacturing Facility</p>
              </div>
              <Badge variant="outline" className="bg-engineering-blue/10 text-engineering-blue">In Progress</Badge>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-semibold">Residential Complex Wiring</h3>
                <p className="text-sm text-muted-foreground">Multi-unit Residential</p>
              </div>
              <Badge variant="outline" className="bg-engineering-green/10 text-engineering-green">Completed</Badge>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">100%</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-semibold">Emergency Lighting System</h3>
                <p className="text-sm text-muted-foreground">Hospital Wing Installation</p>
              </div>
              <Badge variant="outline" className="bg-engineering-blue/10 text-engineering-blue">In Progress</Badge>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Completion Checklist</CardTitle>
          <CardDescription>Essential tasks before project sign-off</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-engineering-green mt-0.5" />
              <div>
                <p className="font-medium">Final Inspection Completed</p>
                <p className="text-sm text-muted-foreground">All installations verified and tested</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-engineering-green mt-0.5" />
              <div>
                <p className="font-medium">Documentation Submitted</p>
                <p className="text-sm text-muted-foreground">As-built drawings and certificates provided</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-engineering-orange mt-0.5" />
              <div>
                <p className="font-medium">Client Training Scheduled</p>
                <p className="text-sm text-muted-foreground">System operation training pending</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-engineering-orange mt-0.5" />
              <div>
                <p className="font-medium">Warranty Registration</p>
                <p className="text-sm text-muted-foreground">Equipment warranties to be registered</p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Completion;
