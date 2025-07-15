
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl font-bold gradient-text-primary mb-4 animate-float">
            404
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-white mb-4">
          Oops! Page not found
        </h1>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist in our knowledge base. 
          It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <a href="/" className="flex items-center justify-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </a>
          </Button>
          
          <Button 
            variant="outline"
            className="glass border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold"
          >
            <Search className="w-4 h-4 mr-2" />
            Search DataHaze
          </Button>
        </div>

        {/* Go Back Link */}
        <div className="mt-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go back to previous page</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
