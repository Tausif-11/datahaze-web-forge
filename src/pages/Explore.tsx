
import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import { categories } from '@/data/categories';
import { articles } from '@/data/articles';
import { useSearch } from '@/hooks/useSearch';

const Explore = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const { query, setQuery, selectedCategory, setSelectedCategory, searchResults } = useSearch();

  const filteredArticles = articles.filter(article => 
    !selectedCategory || article.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Explore' }]} />
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold gradient-text-primary mb-4">
              Explore Knowledge
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Discover articles, research, and insights across all categories of human knowledge.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass rounded-xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles, categories, events..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 glass border-white/10"
                />
              </div>
              
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="glass border-white/10"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                
                <div className="flex rounded-lg border border-white/10 overflow-hidden">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="text-sm font-semibold text-white mb-3">Filter by Category</h3>
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
            )}
          </div>

          {/* Search Results */}
          {query && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Search Results for "{query}"
              </h2>
              {searchResults.length > 0 ? (
                <div className="grid gap-4">
                  {searchResults.map(result => (
                    <div key={`${result.type}-${result.id}`} className="card-glass">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 capitalize">
                              {result.type}
                            </span>
                            {result.category && (
                              <span className="text-xs text-gray-400">
                                {categories.find(c => c.slug === result.category)?.name}
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {result.title}
                          </h3>
                          <p className="text-gray-300 line-clamp-2">
                            {result.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400">No results found for "{query}"</p>
                </div>
              )}
            </div>
          )}

          {/* Categories Grid */}
          {!query && (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Browse by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categories.map(category => (
                    <div key={category.id} className="card-glass group cursor-pointer">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                        <div className="w-6 h-6 text-white">
                          {/* Icon placeholder */}
                          <div className="w-full h-full bg-white/20 rounded"></div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{category.description}</p>
                      <div className="text-xs text-purple-300">
                        {category.articleCount.toLocaleString()} articles
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Articles Grid/List */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  {selectedCategory ? 
                    `${categories.find(c => c.slug === selectedCategory)?.name} Articles` : 
                    'Recent Articles'
                  }
                </h2>
                
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map(article => (
                      <div key={article.id} className="card-glass group cursor-pointer">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                            {categories.find(c => c.slug === article.category)?.name}
                          </span>
                          <span className="text-xs text-gray-400">{article.readTime} min read</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>Updated {new Date(article.lastUpdated).toLocaleDateString()}</span>
                          <span>{article.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredArticles.map(article => (
                      <div key={article.id} className="card-glass group cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                                {categories.find(c => c.slug === article.category)?.name}
                              </span>
                              <span className="text-xs text-gray-400">{article.readTime} min read</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-gray-300 mb-3">{article.excerpt}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-400">
                              <span>Updated {new Date(article.lastUpdated).toLocaleDateString()}</span>
                              <span>{article.views.toLocaleString()} views</span>
                              <div className="flex gap-1">
                                {article.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="px-2 py-1 bg-white/5 rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
