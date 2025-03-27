import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogPostForm from './BlogPostForm';
import { useBlogState } from '../hooks/useBlogState';
import { isWebmaster } from '../../../utils/auth';

const AdminBlogPost = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { addPost } = useBlogState();

  useEffect(() => {
    if (!isWebmaster()) {
      navigate('/blog');
    }
  }, [navigate]);

  const handleSubmit = (postData) => {
    try {
      addPost(postData);
      navigate('/blog');
    } catch (err) {
      setError('Failed to create post. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-medium text-white mb-8">Create New Blog Post</h1>
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mb-6">
              {error}
            </div>
          )}
          <BlogPostForm onSubmit={handleSubmit} />
        </motion.div>
      </div>
    </div>
  );
};

export default AdminBlogPost;