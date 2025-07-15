
import React, { useState, useMemo } from 'react';
import { Clock, Eye, ArrowRight, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { articles } from '@/data/articles';
import { categories } from '@/data/categories';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = selectedCategory 
      ? articles.filter(article => article.category === selectedCategory)
      : articles;

    return filtered.sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      } else {
        return b.views - a.views;
      }
    });
  }, [selectedCategory, sortBy]);

  const getCategoryName = (categorySlug: string) => {
    const category = categories.find(cat => cat.slug === categorySlug);
    return category ? category.name : categorySlug;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Articles' }]} />
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text-primary mb-4">
              DataHaze Articles
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore our collection of in-depth articles covering the latest breakthroughs 
              in science, technology, and human knowledge.
            </p>
          </div>

          {/* Filters */}
          <div className="glass rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium">Filter by category:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedCategory === '' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory('')}
                    className="text-xs"
                  >
                    All
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.slug ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category.slug)}
                      className="text-xs"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular')}
                  className="glass border border-white/10 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedArticles.map((article) => (
              <Card key={article.id} className="card-glass group cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {article.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="glass">
                      {getCategoryName(article.category)}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text-primary transition-all duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{article.author}</span>
                    <span>{formatDate(article.publishDate)}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} min read</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <a
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/link"
                    >
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results */}
          {filteredAndSortedArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">
                No articles found for the selected category.
              </p>
              <Button
                onClick={() => setSelectedCategory('')}
                className="mt-4"
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;
