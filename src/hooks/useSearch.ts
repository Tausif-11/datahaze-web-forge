
import { useState, useMemo } from 'react';
import { SearchResult } from '@/types';
import { articles } from '@/data/articles';
import { categories } from '@/data/categories';
import { events } from '@/data/events';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const searchResults = useMemo((): SearchResult[] => {
    if (!query.trim()) return [];

    const results: SearchResult[] = [];
    const searchTerm = query.toLowerCase();

    // Search articles
    articles.forEach(article => {
      if (
        article.title.toLowerCase().includes(searchTerm) ||
        article.excerpt.toLowerCase().includes(searchTerm) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      ) {
        if (!selectedCategory || article.category === selectedCategory) {
          results.push({
            type: 'article',
            id: article.id,
            title: article.title,
            description: article.excerpt,
            category: article.category,
            slug: article.slug
          });
        }
      }
    });

    // Search categories
    categories.forEach(category => {
      if (
        category.name.toLowerCase().includes(searchTerm) ||
        category.description.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          type: 'category',
          id: category.id,
          title: category.name,
          description: category.description,
          slug: category.slug
        });
      }
    });

    // Search events
    events.forEach(event => {
      if (
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm)
      ) {
        if (!selectedCategory || event.category === selectedCategory) {
          results.push({
            type: 'event',
            id: event.id,
            title: event.title,
            description: event.description,
            category: event.category,
            slug: event.slug
          });
        }
      }
    });

    return results.slice(0, 10); // Limit results
  }, [query, selectedCategory]);

  return {
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
    searchResults,
    isSearching: query.length > 0
  };
};
