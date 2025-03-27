import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PostMeta from './components/PostMeta';
import PostAuthor from './components/PostAuthor';
import defaultBlogImage from '../../assets/blog/default-blog.jpg';

const BlogCard = ({ post, delay = 0 }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
  >
    <Link to={`/blog/${post.slug}`}>
      <div className="relative h-48">
        <img 
          src={post.image || defaultBlogImage}
          alt={post.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = defaultBlogImage;
          }}
        />
      </div>
      <div className="p-6">
        <PostMeta category={post.category} date={post.date} />
        <h2 className="text-xl font-medium text-white mb-2">{post.title}</h2>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        <PostAuthor author={post.author} />
      </div>
    </Link>
  </motion.article>
);

export default BlogCard;