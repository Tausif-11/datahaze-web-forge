
import React from 'react';
import { ArrowRight, BookOpen, Users, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const stats = [
    { label: 'Articles', value: '10,000+', icon: BookOpen },
    { label: 'Contributors', value: '500+', icon: Users },
    { label: 'Daily Views', value: '50K+', icon: TrendingUp },
    { label: 'Updates', value: 'Real-time', icon: Zap },
  ];

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text-primary">DataHaze</span>
            <br />
            <span className="text-white">Knowledge Without Limits</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Discover, explore, and contribute to the world's most comprehensive knowledge base. 
            From science to history, technology to culture - everything you need to know.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Exploring
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card-glass text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
