
import React, { useState } from 'react';
import { Clock, Eye, ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RecentUpdates = () => {
  const [showAll, setShowAll] = useState(false);
  
  const updates = [
    {
      title: 'Breakthrough in Quantum Computing Achieved',
      category: 'Science & Technology',
      time: '2 hours ago',
      views: '15.4K',
      excerpt: 'Scientists at leading research institutions have achieved a major milestone in quantum computing...',
      trending: true,
      featured: true
    },
    {
      title: 'Ancient Civilization Discovered in Amazon',
      category: 'History & Archaeology',
      time: '4 hours ago',
      views: '23.1K',
      excerpt: 'Archaeological team uncovers evidence of a previously unknown civilization deep in the Amazon...',
      trending: true,
      featured: true
    },
    {
      title: 'Global Climate Summit Reaches Historic Agreement',
      category: 'Current Events',
      time: '6 hours ago',
      views: '31.2K',
      excerpt: 'World leaders unite on ambitious climate targets, setting new standards for renewable energy...',
      trending: true,
      featured: true
    },
    {
      title: 'Revolutionary Gene Therapy Shows Promise',
      category: 'Medicine & Health',
      time: '8 hours ago',
      views: '18.9K',
      excerpt: 'New gene therapy treatment demonstrates remarkable success in treating previously incurable...',
      trending: false,
      featured: false
    },
    {
      title: 'James Webb Telescope Reveals Distant Galaxy',
      category: 'Space & Astronomy',
      time: '12 hours ago',
      views: '27.8K',
      excerpt: 'Latest observations from the James Webb Space Telescope provide unprecedented views...',
      trending: false,
      featured: false
    },
    {
      title: 'AI Model Achieves Human-Level Performance',
      category: 'Technology & Innovation',
      time: '16 hours ago',
      views: '19.3K',
      excerpt: 'Advanced artificial intelligence system demonstrates capabilities matching human experts...',
      trending: false,
      featured: false
    },
    {
      title: 'New Archaeological Discovery Rewrites History',
      category: 'History & Archaeology',
      time: '1 day ago',
      views: '14.7K',
      excerpt: 'Recent excavations reveal artifacts that challenge our understanding of ancient civilizations...',
      trending: false,
      featured: false
    },
    {
      title: 'Renewable Energy Reaches New Milestone',
      category: 'Geography & Climate',
      time: '1 day ago',
      views: '22.1K',
      excerpt: 'Global renewable energy capacity surpasses fossil fuels for the first time in history...',
      trending: false,
      featured: false
    }
  ];

  const displayedUpdates = showAll ? updates : updates.filter(update => update.featured);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent Updates
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              Stay current with the latest discoveries, breakthroughs, and developments 
              from around the world.
            </p>
          </div>
          <div className="hidden lg:flex items-center space-x-2 text-purple-300">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium">Live Updates</span>
          </div>
        </div>

        {/* Trending Banner */}
        <div className="glass rounded-xl p-6 mb-8 border border-orange-500/20">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-5 h-5 text-orange-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Trending Now</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {updates.filter(update => update.trending).map((update, index) => (
              <div key={index} className="group cursor-pointer">
                <h4 className="text-white font-medium mb-1 group-hover:text-orange-300 transition-colors line-clamp-2">
                  {update.title}
                </h4>
                <div className="flex items-center text-xs text-gray-400 space-x-3">
                  <span>{update.category}</span>
                  <span className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {update.views}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Updates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedUpdates.map((update, index) => (
            <article key={index} className="card-glass group cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                  {update.category}
                </span>
                {update.trending && (
                  <div className="flex items-center text-orange-400">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    <span className="text-xs">Trending</span>
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                {update.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {update.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {update.time}
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {update.views}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="lg"
            className="glass border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 group"
          >
            {showAll ? 'Show Less' : 'Load More Updates'}
            <ArrowRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentUpdates;
