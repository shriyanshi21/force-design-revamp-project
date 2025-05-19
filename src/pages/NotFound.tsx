
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-force-purple/5 to-background">
      <div className="text-center p-8 max-w-md">
        <div className="w-24 h-24 bg-force-purple/10 rounded-full mx-auto flex items-center justify-center mb-6">
          <span className="text-4xl font-bold text-force-purple">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button asChild className="bg-force-purple hover:bg-force-purple/90">
          <Link to="/">
            <Home className="w-4 h-4 mr-2" /> Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
