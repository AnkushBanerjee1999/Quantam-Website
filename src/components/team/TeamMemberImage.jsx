import React from 'react';

const TeamMemberImage = ({ name, photo }) => (
  <div className="w-full md:w-2/3 relative flex justify-center items-center bg-black">
    <img
      src={photo}
      alt={name}
      className="w-full h-auto md:h-full object-contain md:object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-800/50" />
  </div>
);

export default TeamMemberImage;
