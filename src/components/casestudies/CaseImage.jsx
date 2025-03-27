import React from 'react';

const CaseImage = ({ name, photo }) => (
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
);

export default CaseImage;