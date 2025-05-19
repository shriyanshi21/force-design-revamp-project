
import React from 'react';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className={cn("flex-1 overflow-y-auto p-6", className)}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
