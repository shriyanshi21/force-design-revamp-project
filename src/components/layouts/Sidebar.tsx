
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChartPie, FileText, Home, Lightbulb, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/analysis', label: 'Analysis', icon: <ChartPie className="w-5 h-5" /> },
    { path: '/journal', label: 'Journal', icon: <FileText className="w-5 h-5" /> },
    { path: '/vision', label: "What's Next", icon: <Lightbulb className="w-5 h-5" /> },
    { path: '/settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-full w-16 md:w-64 bg-sidebar shadow-md">
      {/* Logo Section */}
      <div className="p-4 flex items-center h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-force-purple rounded-full flex items-center justify-center">
            <span className="text-white font-bold">F</span>
          </div>
          <span className="font-semibold text-lg hidden md:block">Force</span>
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="mt-6">
        <ul className="space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg transition-colors",
                  isActive(item.path)
                    ? "bg-force-purple text-white"
                    : "hover:bg-slate-100 text-slate-600"
                )}
              >
                {item.icon}
                <span className="hidden md:block">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Section */}
      <div className="absolute bottom-0 w-full p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-force-blue rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">R</span>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Reeshika</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
