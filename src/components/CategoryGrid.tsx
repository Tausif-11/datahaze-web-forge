
import React, { useState } from 'react';
import { ArrowRight, Atom, Scroll, Users, Newspaper, Globe, Palette, Heart, Rocket, BookOpen, Cpu, Gamepad, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CategoryGrid = () => {
  const [showAll, setShowAll] = useState(false);
  
  const categories = [
    {
      title: 'Science & Technology',
      description: 'Latest discoveries in science, technology innovations, and research breakthroughs',
      icon: Atom,
      count: '1,247 articles',
      color: 'from-blue-500 to-purple-600',
      featured: true
    },
    {
      title: 'History & Archaeology',
      description: 'Historical events, archaeological discoveries, and cultural heritage',
      icon: Scroll,
      count: '892 articles',
      color: 'from-amber-500 to-orange-600',
      featured: true
    },
    {
      title: 'Society & Culture',
      description: 'Social movements, cultural trends, and human behavior studies',
      icon: Users,
      count: '756 articles',
      color: 'from-green-500 to-teal-600',
      featured: true
    },
    {
      title: 'Current Events',
      description: 'Breaking news, global events, and real-time developments',
      icon: Newspaper,
      count: '2,341 articles',
      color: 'from-red-500 to-pink-600',
      featured: true
    },
    {
      title: 'Geography & Climate',
      description: 'Environmental changes, geographical discoveries, and climate science',
      icon: Globe,
      count: '634 articles',
      color: 'from-cyan-500 to-blue-600',
      featured: true
    },
    {
      title: 'Arts & Literature',
      description: 'Creative works, literary analysis, and artistic movements',
      icon: Palette,
      count: '543 articles',
      color: 'from-violet-500 to-purple-600',
      featured: true
    },
    {
      title: 'Medicine & Health',
      description: 'Medical breakthroughs, health research, and wellness studies',
      icon: Heart,
      count: '987 articles',
      color: 'from-emerald-500 to-green-600',
      featured: false
    },
    {
      title: 'Space & Astronomy',
      description: 'Space exploration, astronomical discoveries, and cosmic phenomena',
      icon: Rocket,
      count: '432 articles',
      color: 'from-indigo-500 to-purple-600',
      featured: false
    },
    {
      title: 'Education & Learning',
      description: 'Educational methodologies, learning sciences, and academic research',
      icon: GraduationCap,
      count: '675 articles',
      color: 'from-pink-500 to-rose-600',
      featured: false
    },
    {
      title: 'Technology & Innovation',
      description: 'Cutting-edge tech, startups, and innovation in various industries',
      icon: Cpu,
      count: '1,089 articles',
      color: 'from-blue-600 to-indigo-600',
      featured: false
    },
    {
      title: 'Sports & Recreation',
      description: 'Athletic achievements, sports science, and recreational activities',
      icon: Gamepad,
      count: '423 articles',
      color: 'from-orange-500 to-red-600',
      featured: false
    },
    {
      title: 'Philosophy & Ethics',
      description: 'Philosophical discourse, ethical debates, and moral frameworks',
      icon: BookOpen,
      count: '289 articles',
      color: 'from-purple-600 to-pink-600',
      featured: false
    }
  ];

  const displayedCategories = showAll ? categories : categories.filter(cat => cat.featured);

  return (
    <section id="categories" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into specialized areas of knowledge. Each category contains 
            carefully curated articles, research, and insights from experts worldwide.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card-glass group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-300">{category.count}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="lg"
            className="glass border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 group"
          >
            {showAll ? 'Show Less' : 'View All Categories'}
            <ArrowRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
