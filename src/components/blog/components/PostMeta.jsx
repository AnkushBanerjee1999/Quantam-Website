import React from 'react';

const PostMeta = ({ category, date }) => (
  <div className="flex items-center gap-4 mb-4">
    <span className="text-indigo-400 text-sm">{category}</span>
    <span className="text-gray-400 text-sm">{date}</span>
  </div>
);

export default PostMeta;