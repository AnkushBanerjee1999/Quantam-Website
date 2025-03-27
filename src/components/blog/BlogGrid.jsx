import React from 'react';
import BlogCard from './BlogCard';
import { useBlogPosts } from './hooks/useBlogPosts';

const BlogGrid = ({ category, searchQuery }) => {
  const filteredPosts = useBlogPosts(category, searchQuery);

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No articles found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.map((post, index) => (
        <BlogCard 
          key={post.slug} 
          post={post} 
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default BlogGrid;