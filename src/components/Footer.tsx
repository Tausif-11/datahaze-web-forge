
import React from 'react';
import { Github, Twitter, Mail, Heart, Zap } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Explore',
      links: [
        { name: 'Categories', href: '#' },
        { name: 'Recent Updates', href: '#' },
        { name: 'Popular Articles', href: '#' },
        { name: 'Featured Content', href: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Contributors', href: '#' },
        { name: 'Guidelines', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Our Mission', href: '#' },
        { name: 'Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Licensing', href: '#' },
      ],
    },
  ];

  return (
    <footer className="glass border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25"></div>
              </div>
              <span className="text-2xl font-bold gradient-text-primary">DataHaze</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              DataHaze is a comprehensive knowledge platform that brings together the world's 
              information in a beautiful, accessible format. Join millions of learners and 
              contributors worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="glass-hover p-2 rounded-lg border border-white/20">
                <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="#" className="glass-hover p-2 rounded-lg border border-white/20">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="#" className="glass-hover p-2 rounded-lg border border-white/20">
                <Mail className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">
                Get the latest articles and updates delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="glass px-4 py-2 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-2 rounded-lg text-white font-medium transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 DataHaze. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by the DataHaze team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
