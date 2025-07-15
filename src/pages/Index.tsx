
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import RecentUpdates from '@/components/RecentUpdates';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for aesthetic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="animate-fade-in">
        <Hero />
        <CategoryGrid />
        <RecentUpdates />
        
        {/* TODO: Add these sections later */}
        {/* <FeaturedArticles /> */}
        {/* <Statistics /> */}
        {/* <Contributors /> */}
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
