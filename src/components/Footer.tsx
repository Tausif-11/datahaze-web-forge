
import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Implement actual newsletter subscription
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-400' },
  ];

  const footerLinks = {
    'Explore': [
      { name: 'All Categories', href: '/explore' },
      { name: 'Recent Articles', href: '/explore?filter=recent' },
      { name: 'Popular Topics', href: '/explore?filter=popular' },
      { name: 'Advanced Search', href: '/explore?advanced=true' },
    ],
    'About': [
      { name: 'Our Mission', href: '/about' },
      { name: 'Team', href: '/about#team' },
      { name: 'Roadmap', href: '/about#roadmap' },
      { name: 'Careers', href: '/about#careers' },
    ],
    'Community': [
      { name: 'Contribute', href: '/contribute' },
      { name: 'Guidelines', href: '/guidelines' },
      { name: 'Events', href: '/events' },
      { name: 'Discord', href: 'https://discord.gg' },
    ],
    'Support': [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-t from-black/50 to-transparent border-t border-white/10">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Newsletter Section */}
        <div className="card-glass mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Get the latest articles, discoveries, and insights delivered to your inbox.
            </p>
            
            {subscribed ? (
              <div className="flex items-center justify-center space-x-2 text-green-400">
                <Heart className="w-5 h-5 fill-current" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="glass border-white/10 focus:border-purple-500 flex-1"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 font-semibold transition-all duration-300"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DH</span>
                </div>
                <span className="text-lg font-bold gradient-text-primary">DataHaze</span>
              </div>
              <div className="hidden md:block h-4 w-px bg-white/20"></div>
              <p className="text-gray-400 text-sm">
                © {currentYear} DataHaze. Made with <Heart className="w-4 h-4 inline mx-1 text-red-400 fill-current" /> for knowledge seekers.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm hidden sm:block">Follow us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
