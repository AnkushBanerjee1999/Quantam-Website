import React from 'react';
import PostMeta from '../components/PostMeta';
import PostAuthor from '../components/PostAuthor';

const BlogPreview = ({ post }) => {
  if (!post) return null;

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-medium text-white mb-4">Preview</h2>
      <PostMeta category={post.category} date={post.date} />
      <h1 className="text-2xl font-medium text-white mb-4">{post.title}</h1>
      <p className="text-gray-300 mb-6">{post.excerpt}</p>
      <div className="prose prose-invert max-w-none mb-6" dangerouslySetInnerHTML={{ __html: post.content }} />
      <PostAuthor author={post.author} />
    </div>
  );
};

export default BlogPreview;