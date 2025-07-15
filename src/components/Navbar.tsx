
import React, { useState } from 'react';
import { Search, Menu, X, Globe, Book, Users, Calendar, Zap, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearch } from '@/hooks/useSearch';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { query, setQuery, searchResults } = useSearch();

  const navItems = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'Explore', href: '/explore', icon: Book },
    { name: 'Articles', href: '/articles', icon: FileText },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Events', href: '/events', icon: Calendar },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/explore?search=${encodeURIComponent(query)}`;
    }
  };

  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-float">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25"></div>
              </div>
              <span className="text-xl font-bold gradient-text-primary">DataHaze</span>
            </a>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search DataHaze..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="glass pl-10 pr-4 py-2 w-full border-white/10 focus:border-purple-500 focus:ring-purple-500"
              />
            </form>
            
            {/* Search Dropdown */}
            {isSearchFocused && query && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 glass rounded-lg border border-white/10 overflow-hidden z-50">
                {searchResults.slice(0, 5).map((result) => (
                  <a
                    key={`${result.type}-${result.id}`}
                    href={result.type === 'article' ? `/articles/${result.slug}` : `/${result.type}/${result.slug}`}
                    className="block px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-white">{result.title}</div>
                        <div className="text-xs text-gray-400 mt-1 line-clamp-1">{result.description}</div>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 capitalize">
                        {result.type}
                      </span>
                    </div>
                  </a>
                ))}
                {searchResults.length > 5 && (
                  <a
                    href={`/explore?search=${encodeURIComponent(query)}`}
                    className="block px-4 py-3 text-center text-sm text-purple-300 hover:bg-white/10 transition-colors"
                  >
                    View all {searchResults.length} results
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="glass-hover px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="glass-hover"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search DataHaze..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="glass pl-10 pr-4 py-2 w-full border-white/10 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </form>
            </div>

            {/* Mobile Navigation Items */}
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="glass-hover block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
