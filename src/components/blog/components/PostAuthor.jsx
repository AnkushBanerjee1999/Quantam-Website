import React from 'react';

const PostAuthor = ({ author }) => (
  <div className="flex items-center gap-3">
    <img 
      src={author.avatar} 
      alt={author.name}
      className="w-8 h-8 rounded-full bg-gray-700"
      loading="lazy"
    />
    <div>
      <p className="text-white text-sm font-medium">{author.name}</p>
      <p className="text-gray-400 text-sm">{author.role}</p>
    </div>
  </div>
);

export default PostAuthor;