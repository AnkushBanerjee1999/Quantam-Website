import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import BlogHeader from './BlogHeader';
import BlogSearch from './BlogSearch';
import BlogCategories from './BlogCategories';
import BlogGrid from './BlogGrid';
import { useSearch } from './hooks/useSearch';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchQuery, handleSearch } = useSearch();

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp}>
            <BlogHeader />
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
              <BlogCategories 
                selected={selectedCategory} 
                onSelect={setSelectedCategory} 
              />
              <BlogSearch onSearch={handleSearch} />
            </div>
            <BlogGrid 
              category={selectedCategory}
              searchQuery={searchQuery}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;