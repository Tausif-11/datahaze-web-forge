
import React from 'react';
import { Zap } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-spin">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 animate-ping"></div>
        </div>
        <p className="text-white text-lg font-semibold">Loading DataHaze...</p>
        <p className="text-gray-400 text-sm mt-2">Preparing your knowledge experience</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
