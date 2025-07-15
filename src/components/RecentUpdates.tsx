
import React from 'react';
import { Clock, TrendingUp, Eye, MessageCircle } from 'lucide-react';

const RecentUpdates = () => {
  const updates = [
    {
      title: 'Quantum Computing Breakthrough at MIT',
      category: 'Science & Technology',
      time: '2 hours ago',
      views: '1.2K',
      comments: 45,
      excerpt: 'Researchers demonstrate new quantum error correction method that could accelerate practical quantum computing by decades.',
      image: '/api/placeholder/300/200',
      trending: true,
    },
    {
      title: 'Ancient Mayan City Discovered in Guatemala',
      category: 'History',
      time: '5 hours ago',
      views: '890',
      comments: 23,
      excerpt: 'Archaeologists uncover a previously unknown Mayan settlement using advanced LiDAR technology.',
      image: '/api/placeholder/300/200',
      trending: false,
    },
    {
      title: 'Climate Change Impact on Arctic Wildlife',
      category: 'Environment',
      time: '8 hours ago',
      views: '2.1K',
      comments: 67,
      excerpt: 'New study reveals surprising adaptations of polar bears and seals to changing ice conditions.',
      image: '/api/placeholder/300/200',
      trending: true,
    },
    {
      title: 'Revolutionary Gene Therapy Treatment Approved',
      category: 'Medicine',
      time: '12 hours ago',
      views: '3.5K',
      comments: 89,
      excerpt: 'FDA approves groundbreaking gene therapy for rare genetic disorder affecting children.',
      image: '/api/placeholder/300/200',
      trending: true,
    },
    {
      title: 'Ancient Roman Villa Found in London',
      category: 'Archaeology',
      time: '1 day ago',
      views: '756',
      comments: 31,
      excerpt: 'Construction workers discover well-preserved Roman villa beneath London construction site.',
      image: '/api/placeholder/300/200',
      trending: false,
    },
    {
      title: 'New Exoplanet Shows Signs of Water',
      category: 'Space & Astronomy',
      time: '1 day ago',
      views: '1.8K',
      comments: 52,
      excerpt: 'James Webb Space Telescope detects water vapor in atmosphere of distant exoplanet.',
      image: '/api/placeholder/300/200',
      trending: true,
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent <span className="gradient-text-primary">Updates</span>
            </h2>
            <p className="text-xl text-gray-300">
              Stay updated with the latest discoveries, breakthroughs, and knowledge additions.
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="glass-hover px-4 py-2 rounded-lg border border-white/20 text-white text-sm">
              All Updates
            </button>
            <button className="glass-hover px-4 py-2 rounded-lg border border-white/20 text-white text-sm">
              Trending
            </button>
          </div>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <article
              key={index}
              className="card-glass cursor-pointer group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Trending Badge */}
              {update.trending && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-red-500 to-pink-500 px-2 py-1 rounded-full text-xs text-white">
                    <TrendingUp className="w-3 h-3" />
                    <span>Trending</span>
                  </div>
                </div>
              )}

              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-white/50 text-sm">Image Placeholder</div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                {/* Category and Time */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-400 font-medium">{update.category}</span>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>{update.time}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                  {update.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-400 line-clamp-3">
                  {update.excerpt}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{update.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{update.comments}</span>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-purple-400 font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="glass-hover px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:border-purple-500 transition-all duration-300">
            Load More Updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentUpdates;
