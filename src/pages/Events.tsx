
import React, { useState } from 'react';
import { Calendar, MapPin, TrendingUp, Filter, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import { events } from '@/data/events';
import { categories } from '@/data/categories';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedImpact, setSelectedImpact] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = events.filter(event => {
    const categoryMatch = !selectedCategory || event.category === selectedCategory;
    const impactMatch = !selectedImpact || event.impact === selectedImpact;
    return categoryMatch && impactMatch;
  });

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'from-red-500 to-pink-600';
      case 'medium': return 'from-yellow-500 to-orange-600';
      case 'low': return 'from-green-500 to-teal-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getImpactLabel = (impact: string) => {
    switch (impact) {
      case 'high': return 'High Impact';
      case 'medium': return 'Medium Impact';
      case 'low': return 'Low Impact';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Events' }]} />
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold gradient-text-primary mb-4">
              Global Events
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Stay updated with the latest happenings around the world. From scientific breakthroughs 
              to cultural milestones, track the events shaping our future.
            </p>
          </div>

          {/* Filters */}
          <div className="glass rounded-xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Filter Events</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="glass border-white/10 lg:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                {showFilters ? 'Hide' : 'Show'} Filters
              </Button>
            </div>

            <div className={`mt-6 space-y-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={!selectedCategory ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory('')}
                    className="glass border-white/10"
                  >
                    All Categories
                  </Button>
                  {categories.map(category => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.slug ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category.slug)}
                      className="glass border-white/10"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Impact Filter */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Impact Level</h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={!selectedImpact ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedImpact('')}
                    className="glass border-white/10"
                  >
                    All Levels
                  </Button>
                  {['high', 'medium', 'low'].map(impact => (
                    <Button
                      key={impact}
                      variant={selectedImpact === impact ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedImpact(impact)}
                      className="glass border-white/10"
                    >
                      {getImpactLabel(impact)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Events Timeline */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">
                Recent Events ({filteredEvents.length})
              </h2>
              <div className="text-sm text-gray-400">
                Showing events from the last 30 days
              </div>
            </div>

            {filteredEvents.length > 0 ? (
              <div className="space-y-6">
                {filteredEvents.map((event, index) => (
                  <div key={event.id} className="card-glass relative">
                    {/* Timeline connector */}
                    {index < filteredEvents.length - 1 && (
                      <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                    )}
                    
                    <div className="flex items-start gap-6">
                      {/* Date indicator */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex flex-col items-center justify-center text-white text-xs font-semibold">
                          <div>{new Date(event.date).getDate()}</div>
                          <div>{new Date(event.date).toLocaleDateString('en', { month: 'short' })}</div>
                        </div>
                      </div>

                      {/* Event content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                              {categories.find(c => c.slug === event.category)?.name}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getImpactColor(event.impact)}/20 text-white`}>
                              {getImpactLabel(event.impact)}
                            </span>
                          </div>
                          <div className="text-xs text-gray-400 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {new Date(event.date).toLocaleDateString()}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-3 hover:text-purple-300 transition-colors cursor-pointer">
                          {event.title}
                        </h3>

                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            {event.location && (
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {event.location}
                              </div>
                            )}
                            {event.source && (
                              <div className="flex items-center">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                {event.source}
                              </div>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-purple-300 hover:text-white hover:bg-purple-500/20"
                          >
                            Read More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 opacity-50">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No Events Found</h3>
                <p className="text-gray-400">Try adjusting your filters to see more events.</p>
              </div>
            )}
          </div>

          {/* Load More */}
          {filteredEvents.length > 0 && (
            <div className="text-center">
              <Button
                variant="outline"
                className="glass border-white/10 hover:bg-white/10"
              >
                Load More Events
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
