
export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  articleCount: number;
  color: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  lastUpdated: string;
  views: number;
  tags: string[];
  featured: boolean;
  slug: string;
  author: string;
  heroImage: string;
  content: string;
  publishDate: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  location?: string;
  impact: 'low' | 'medium' | 'high';
  source?: string;
  slug: string;
}

export interface SearchResult {
  type: 'article' | 'category' | 'event';
  id: string;
  title: string;
  description: string;
  category?: string;
  slug: string;
}
