
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Analysis = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Explore Your Insights</h1>
        <p className="text-muted-foreground">
          Analyze your journal entries and voice recordings to discover patterns and insights.
        </p>
      </div>
      
      <div className="border-b mb-6">
        <div className="flex space-x-4">
          <Link to="/analysis">
            <Button 
              variant={isActive('/analysis') ? 'default' : 'ghost'} 
              className={cn(
                "rounded-none border-b-2", 
                isActive('/analysis') 
                  ? "border-force-purple" 
                  : "border-transparent"
              )}
            >
              New Analysis
            </Button>
          </Link>
          <Link to="/analysis/history">
            <Button 
              variant={isActive('/analysis/history') ? 'default' : 'ghost'} 
              className={cn(
                "rounded-none border-b-2", 
                isActive('/analysis/history') 
                  ? "border-force-purple" 
                  : "border-transparent"
              )}
            >
              Analysis History
            </Button>
          </Link>
        </div>
      </div>

      <Outlet />
    </MainLayout>
  );
};

export default Analysis;
