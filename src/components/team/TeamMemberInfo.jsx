import React from 'react';

const TeamMemberInfo = ({ name, title, bio }) => (
  <div className="w-full md:w-2/3 p-4 md:p-8">
    <h3 className="text-xl md:text-2xl font-medium mb-2 font-inter">{name}</h3>
    <p className="text-indigo-400 text-lg md:text-xl mb-4 font-inter">{title}</p>
    <div className="text-gray-300 space-y-4">
      {bio.split('\n\n').map((paragraph, index) => (
        <p key={index} className="leading-relaxed font-inter">
          {paragraph.trim()}
        </p>
      ))}
    </div>
  </div>
);

export default TeamMemberInfo;
