import { useMemo } from 'react';
import { blogPosts } from '../data/blogPosts';

export const useBlogPosts = (category, searchQuery) => {
  return useMemo(() => {
    let filtered = [...blogPosts];
    
    if (category !== 'all') {
      filtered = filtered.filter(post => post.category === category);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [category, searchQuery]);
};