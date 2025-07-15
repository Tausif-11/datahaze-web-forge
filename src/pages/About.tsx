
import React from 'react';
import { Target, Users, Zap, Globe, BookOpen, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';

const About = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Knowledge',
      description: 'Access information from around the world, covering every field of human knowledge.'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Stay current with the latest discoveries, breakthroughs, and developments.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by experts and enthusiasts who share their knowledge with the world.'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Coverage',
      description: 'From science to history, technology to culture - everything you need to know.'
    }
  ];

  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      title: 'Enhanced Search & AI',
      description: 'Advanced search capabilities with AI-powered recommendations',
      status: 'in-progress'
    },
    {
      quarter: 'Q2 2024',
      title: 'Mobile Application',
      description: 'Native mobile apps for iOS and Android platforms',
      status: 'planned'
    },
    {
      quarter: 'Q3 2024',
      title: 'Collaborative Editing',
      description: 'Real-time collaborative editing tools for contributors',
      status: 'planned'
    },
    {
      quarter: 'Q4 2024',
      title: 'Multilingual Support',
      description: 'Support for multiple languages and automatic translation',
      status: 'planned'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About' }]} />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text-primary">About DataHaze</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We believe that knowledge should be accessible to everyone, everywhere. 
              DataHaze is building the world's most comprehensive and beautiful knowledge platform.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize access to human knowledge by creating a beautiful, 
                intuitive, and comprehensive platform that serves as humanity's 
                collective memory and wisdom.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We're building more than just another encyclopedia. DataHaze represents 
                a new paradigm for how knowledge is discovered, shared, and preserved 
                for future generations.
              </p>
            </div>
            <div className="card-glass">
              <div className="text-center">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold gradient-text-primary mb-2">10,000+</div>
                    <div className="text-sm text-gray-400">Articles</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text-primary mb-2">500+</div>
                    <div className="text-sm text-gray-400">Contributors</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text-primary mb-2">50K+</div>
                    <div className="text-sm text-gray-400">Daily Readers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text-primary mb-2">12</div>
                    <div className="text-sm text-gray-400">Categories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Makes DataHaze Special
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="card-glass text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-glass">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Open Knowledge</h3>
                <p className="text-gray-400 leading-relaxed">
                  We believe knowledge belongs to everyone. Our platform is built on principles 
                  of openness, transparency, and collaborative learning.
                </p>
              </div>
              <div className="card-glass">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Community First</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our community of contributors, editors, and readers is at the heart 
                  of everything we do. Together, we're building something amazing.
                </p>
              </div>
              <div className="card-glass">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quality & Care</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every piece of content is carefully reviewed and maintained to ensure 
                  accuracy, reliability, and relevance for our global audience.
                </p>
              </div>
            </div>
          </div>

          {/* Roadmap Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Roadmap</h2>
            <div className="space-y-6">
              {roadmapItems.map((item, index) => (
                <div key={index} className="card-glass">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        item.status === 'in-progress' 
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-600' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-500'
                      }`}>
                        <span className="text-white font-semibold text-sm">{item.quarter}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === 'in-progress' 
                            ? 'bg-yellow-500/20 text-yellow-300' 
                            : 'bg-purple-500/20 text-purple-300'
                        }`}>
                          {item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                        </span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Us Section */}
          <div className="text-center card-glass">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you're a researcher, writer, developer, or just someone passionate 
              about knowledge, there's a place for you in the DataHaze community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Become a Contributor
              </button>
              <button className="glass border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
