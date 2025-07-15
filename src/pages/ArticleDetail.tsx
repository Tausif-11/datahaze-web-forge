
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Eye, Calendar, User, Tag, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { articles } from '@/data/articles';
import { categories } from '@/data/categories';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
            <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/articles')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Articles', href: '/articles' },
            { label: article.title }
          ]} />
          
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/articles')}
            className="mb-6 glass-hover"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="mb-4">
              <Badge className="mb-4">
                {getCategoryName(article.category)}
              </Badge>
              {article.featured && (
                <Badge className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500">
                  Featured
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="glass rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.publishDate)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} min read</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Eye className="w-4 h-4" />
                  <span>{article.views.toLocaleString()} views</span>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto glass-hover">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative overflow-hidden rounded-xl mb-8">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Article Content */}
          <div className="glass rounded-xl p-8 mb-8">
            <div 
              className="article-content text-gray-200 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Tags */}
          <div className="glass rounded-xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-400">Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="glass">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedArticles.map((relatedArticle) => (
                  <a
                    key={relatedArticle.id}
                    href={`/articles/${relatedArticle.slug}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      <img
                        src={relatedArticle.heroImage}
                        alt={relatedArticle.title}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-semibold text-white group-hover:gradient-text-primary transition-all duration-300 line-clamp-2 mb-2">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>{relatedArticle.author}</span>
                      <span>{formatDate(relatedArticle.publishDate)}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
