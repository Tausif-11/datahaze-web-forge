
# DataHaze - Knowledge Without Limits

A beautiful, modern Wikipedia-like knowledge platform built with React, TypeScript, and Tailwind CSS. DataHaze provides a comprehensive, searchable knowledge base with a stunning dark glassmorphism design.

## 🚀 Features

### Core Functionality
- **Comprehensive Knowledge Base**: 10,000+ articles across 12+ categories
- **Advanced Search**: Real-time search with auto-complete and filtering
- **Category Exploration**: Organized knowledge across Science, History, Current Events, and more
- **Real-time Updates**: Stay current with the latest discoveries and developments
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience
- **Modern Dark UI**: Glassmorphism design with gradient backgrounds
- **Smooth Animations**: Engaging micro-interactions and transitions
- **Intuitive Navigation**: Easy-to-use breadcrumbs and navigation system
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **Component Architecture**: Modular, reusable components
- **Performance Optimized**: Lazy loading and efficient rendering
- **SEO Friendly**: Structured data and meta tags for better search visibility
- **Custom Design System**: Consistent theming with Tailwind CSS

## 🎨 Design System

### Color Palette
- **Primary Gradients**: Purple to pink gradients (`from-purple-500 to-pink-500`)
- **Background**: Deep purple to blue gradients with glassmorphism effects
- **Text**: White primary text with gray secondary text
- **Accents**: Various gradient combinations for categories and elements

### Components
- **Glass Cards**: Backdrop blur with semi-transparent backgrounds
- **Gradient Buttons**: Interactive buttons with hover animations
- **Custom Scrollbars**: Styled scrollbars matching the theme
- **Floating Elements**: Animated icons and interactive components

## 📁 Project Structure

```
src/
├── components/
│   ├── common/             # Shared components
│   │   └── Breadcrumb.tsx
│   ├── ui/                 # Shadcn UI components
│   ├── Navbar.tsx          # Navigation with search
│   ├── Hero.tsx            # Landing page hero section
│   ├── CategoryGrid.tsx    # Knowledge categories
│   ├── RecentUpdates.tsx   # Latest articles and updates
│   ├── Footer.tsx          # Site footer with newsletter
│   └── LoadingSpinner.tsx  # Loading animation
├── pages/
│   ├── Index.tsx           # Homepage
│   ├── Explore.tsx         # Category exploration and search
│   ├── About.tsx           # About page with mission and roadmap
│   ├── Events.tsx          # Recent global events
│   └── NotFound.tsx        # 404 error page
├── data/                   # Mock data and content
│   ├── categories.ts       # Category definitions
│   ├── articles.ts         # Article database
│   └── events.ts           # Events database
├── hooks/
│   └── useSearch.ts        # Search functionality
├── types/
│   └── index.ts            # TypeScript interfaces
└── index.css               # Global styles and design system
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type safety and enhanced developer experience
- **Tailwind CSS** - Utility-first styling with custom design system
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Lucide React** - Beautiful, customizable icons
- **Shadcn/ui** - High-quality, accessible component library
- **React Query** - Data fetching and state management

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/datahaze.git
   cd datahaze
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with call-to-action buttons
- Category overview grid
- Recent updates section
- Statistics and key metrics

### Explore (`/explore`)
- Advanced search functionality
- Category filtering
- Grid and list view options
- Pagination and sorting

### About (`/about`)
- Mission statement and values
- Feature highlights
- Development roadmap
- Team information (placeholder)

### Events (`/events`)
- Timeline of recent global events
- Category and impact filtering
- Event details and sources
- Real-time updates (static for now)

### Search Functionality
- Real-time search across articles, categories, and events
- Auto-complete suggestions
- Category-based filtering
- Advanced search options

## 🎯 Categories Covered

- **Science & Technology** - Latest discoveries and innovations
- **History & Archaeology** - Historical events and discoveries
- **Society & Culture** - Social movements and cultural trends
- **Current Events** - Breaking news and global developments
- **Geography & Climate** - Environmental and geographical insights
- **Arts & Literature** - Creative works and artistic movements
- **Medicine & Health** - Medical breakthroughs and health research
- **Space & Astronomy** - Space exploration and cosmic discoveries
- **Education & Learning** - Educational research and methodologies
- **Technology & Innovation** - Tech startups and innovations
- **Sports & Recreation** - Athletic achievements and sports science
- **Philosophy & Ethics** - Philosophical discourse and ethical debates

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure build settings (auto-detected)
4. Deploy with zero configuration

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

### Environment Variables
Currently, no environment variables are required for basic functionality.

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Write or update tests if needed
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

### Areas for Contribution
- **Content**: Add new articles, categories, or events
- **Features**: Implement new functionality (user accounts, bookmarks, etc.)
- **Design**: Improve UI/UX and accessibility
- **Performance**: Optimize loading times and bundle size
- **Testing**: Add unit tests and integration tests
- **Documentation**: Improve guides and documentation

## 📋 Roadmap

### Phase 1 - Foundation ✅
- [x] Core design system and components
- [x] Basic navigation and routing
- [x] Search functionality
- [x] Responsive design
- [x] Category exploration

### Phase 2 - Enhanced Features (Q1 2024)
- [ ] User authentication and profiles
- [ ] Bookmark and favorites system
- [ ] Advanced search filters
- [ ] Content management system
- [ ] Real-time collaboration tools

### Phase 3 - Advanced Capabilities (Q2 2024)
- [ ] Mobile application (React Native)
- [ ] Offline reading support
- [ ] Multi-language support
- [ ] AI-powered content recommendations
- [ ] API for third-party integrations

### Phase 4 - Community Features (Q3 2024)
- [ ] User-generated content
- [ ] Discussion forums
- [ ] Expert verification system
- [ ] Content rating and reviews
- [ ] Editorial workflow

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Code Style
- Use TypeScript for all new files
- Follow React best practices
- Use functional components with hooks
- Implement responsive design with Tailwind CSS
- Add proper TypeScript types for all components

### Performance Considerations
- Lazy load components where appropriate
- Optimize images and assets
- Use React.memo for expensive components
- Implement virtual scrolling for large lists
- Monitor bundle size and optimize imports

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern dark UI trends and glassmorphism
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful icons
- **Components**: [Shadcn/ui](https://ui.shadcn.com/) for accessible components
- **Typography**: System fonts for optimal performance
- **Community**: Open-source contributors and knowledge enthusiasts

## 📞 Support

- **Documentation**: Check our comprehensive guides
- **Issues**: Report bugs on GitHub Issues
- **Discussions**: Join community discussions
- **Email**: contact@datahaze.com (placeholder)

---

**DataHaze** - Democratizing access to human knowledge with style and elegance.

Built with ❤️ for knowledge seekers everywhere.
