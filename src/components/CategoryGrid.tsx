
import React from 'react';
import { 
  Atom, 
  Clock, 
  Users, 
  Calendar, 
  Globe, 
  Cpu, 
  Paintbrush, 
  BookOpen,
  Trophy,
  Music,
  Microscope,
  Rocket
} from 'lucide-react';

const CategoryGrid = () => {
  const categories = [
    {
      name: 'Science & Technology',
      description: 'Physics, Chemistry, Biology, Engineering, AI',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      articles: '2,500+',
    },
    {
      name: 'History',
      description: 'Ancient civilizations, Modern history, Archaeology',
      icon: Clock,
      color: 'from-amber-500 to-orange-500',
      articles: '1,800+',
    },
    {
      name: 'Society & Culture',
      description: 'Anthropology, Sociology, Philosophy, Religion',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      articles: '1,200+',
    },
    {
      name: 'Current Events',
      description: 'News, Politics, Economics, Global affairs',
      icon: Calendar,
      color: 'from-red-500 to-pink-500',
      articles: '900+',
    },
    {
      name: 'Geography',
      description: 'Countries, Cities, Natural phenomena, Climate',
      icon: Globe,
      color: 'from-teal-500 to-blue-500',
      articles: '1,500+',
    },
    {
      name: 'Technology',
      description: 'Computing, Internet, Innovation, Startups',
      icon: Cpu,
      color: 'from-purple-500 to-violet-500',
      articles: '1,100+',
    },
    {
      name: 'Arts & Literature',
      description: 'Fine arts, Literature, Music, Theatre',
      icon: Paintbrush,
      color: 'from-pink-500 to-rose-500',
      articles: '800+',
    },
    {
      name: 'Education',
      description: 'Learning, Universities, Academic research',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-500',
      articles: '600+',
    },
    {
      name: 'Sports',
      description: 'Olympics, World cups, Athletes, Records',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      articles: '700+',
    },
    {
      name: 'Entertainment',
      description: 'Movies, TV shows, Gaming, Celebrities',
      icon: Music,
      color: 'from-cyan-500 to-blue-500',
      articles: '950+',
    },
    {
      name: 'Medicine',
      description: 'Healthcare, Diseases, Treatments, Research',
      icon: Microscope,
      color: 'from-emerald-500 to-green-500',
      articles: '1,300+',
    },
    {
      name: 'Space & Astronomy',
      description: 'Planets, Stars, Space exploration, Universe',
      icon: Rocket,
      color: 'from-violet-500 to-purple-500',
      articles: '400+',
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore by <span className="gradient-text-primary">Category</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dive deep into any subject that interests you. Our comprehensive categories 
            cover every aspect of human knowledge.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card-glass cursor-pointer group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Category Name */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  {/* Article Count */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {category.articles} articles
                    </span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-purple-400 font-medium">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="glass-hover px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:border-purple-500 transition-all duration-300">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
