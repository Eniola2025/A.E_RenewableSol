import { Zap, FileCheck, ClipboardCheck, Shield, Box, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.jpg";
import heroImage from "@/assets/hero.jpg";

const Index = () => {
  const tools = [
    {
      title: "Circuit Breaker",
      description: "Electrical protection and safety systems",
      icon: Zap,
      link: "/breaker",
      color: "engineering-blue",
    },
    {
      title: "Certificates",
      description: "Compliance and certification management",
      icon: FileCheck,
      link: "/certificate",
      color: "engineering-green",
    },
    {
      title: "Project Completion",
      description: "Track and manage project progress",
      icon: ClipboardCheck,
      link: "/completion",
      color: "engineering-green",
    },
    {
      title: "Earthing Systems",
      description: "Ground fault protection and safety",
      icon: Shield,
      link: "/earthing",
      color: "engineering-green",
    },
    {
      title: "Equipment Kits",
      description: "Standard installation kits and inventory",
      icon: Box,
      link: "/kit",
      color: "primary",
    },
    {
      title: "ToolBox",
      description: "Essential tools and safety information",
      icon: Wrench,
      link: "/toolbox",
      color: "engineering-orange",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Hero Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Logo and Title */}
          <div className="flex flex-col items-center text-center space-y-6">
            <img 
              src={logo} 
              alt="A.E Renewable Ltd Logo" 
              className="h-32 w-32 object-contain"
            />
            <div className="space-y-4">
              <Badge variant="outline" className="mb-2">
                Professional Solar Engineering Tools
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                A.E RENEWABLE LTD
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Complete suite of professional tools for solar system design, 
                sizing, and installation management.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img 
              src={heroImage} 
              alt="Solar panels in rural setting at sunset" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 pb-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link key={tool.link} to={tool.link}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-2 hover:border-primary">
                  <CardHeader>
                    <div className={`p-3 bg-${tool.color}/10 rounded-lg w-fit mb-3`}>
                      <Icon className={`h-8 w-8 text-${tool.color}`} />
                    </div>
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                    <CardDescription className="text-sm">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group">
                      Access Tool
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-card border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About A.E Renewable Ltd</h2>
          <p className="text-muted-foreground mb-4">
            A.E Renewable Ltd provides comprehensive solar engineering solutions for residential, commercial, and industrial projects.
            Our professional toolkit ensures accurate system sizing, optimal component selection, and reliable installation management.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-engineering-blue/10 rounded-lg">
              <h3 className="font-semibold mb-2">Precision Engineering</h3>
              <p className="text-muted-foreground">100% accurate calculations for optimal system design</p>
            </div>
            <div className="p-4 bg-engineering-green/10 rounded-lg">
              <h3 className="font-semibold mb-2">Cost Efficiency</h3>
              <p className="text-muted-foreground">Smart sizing reduces waste and maximizes ROI</p>
            </div>
            <div className="p-4 bg-engineering-orange/10 rounded-lg">
              <h3 className="font-semibold mb-2">Professional Tools</h3>
              <p className="text-muted-foreground">Industry-standard equipment and calculations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
