import { Menu, Zap, FileCheck, ClipboardCheck, Wrench, Box, Shield } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface EngineeringSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { title: "Breaker", path: "/breaker", icon: Zap },
  { title: "Certificate", path: "/certificate", icon: FileCheck },
  { title: "Completion", path: "/completion", icon: ClipboardCheck },
  { title: "Earthing", path: "/earthing", icon: Shield },
  { title: "Kit", path: "/kit", icon: Box },
  { title: "ToolBox", path: "/toolbox", icon: Wrench },
];

export function EngineeringSidebar({ collapsed, onToggle }: EngineeringSidebarProps) {
  const location = useLocation();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 z-50 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          <h2
            className={`font-bold text-lg text-sidebar-foreground transition-opacity duration-300 ${
              collapsed ? "opacity-0 w-0" : "opacity-100"
            }`}
          >
            ENGR Tools
          </h2>
          <Button
            onClick={onToggle}
            variant="ghost"
            size="icon"
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span
                      className={`font-medium transition-opacity duration-300 ${
                        collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                      }`}
                    >
                      {item.title}
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div
            className={`text-xs text-sidebar-foreground/60 transition-opacity duration-300 ${
              collapsed ? "opacity-0" : "opacity-100"
            }`}
          >
            Engineering Tools v1.0
          </div>
        </div>
      </div>
    </aside>
  );
}
