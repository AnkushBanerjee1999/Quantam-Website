import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import playBtn from '../appstore/play-button.png'

const AppCard = ({ name, description, videoUrl, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const handleViewMore = () => {
    const sanitizedAppName = name.replace(/\s+/g, '-'); // Replace spaces with hyphens
    navigate(`/${sanitizedAppName}`);
  };
  const truncatedDescription = description.length > 100 
    ? `${description.slice(0, 100)}...` 
    : description;
  
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors h-full flex flex-col">
      <div className="relative aspect-video">
        {isPlaying ? (
          <video
            src={videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            controls
            onEnded={() => setIsPlaying(false)}
          />
        ) : (
          <div className="relative w-full h-full">
            <img
              src={thumbnailUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
            {/* <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-colors"
            >
              <img 
                src= {playBtn} 
                alt="Play"
                className="w-16 h-16 transition-transform hover:scale-110"
              />
            </button> */}
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-medium text-white mb-2">{name}</h3>
        <div className="flex-grow">
          <p className="text-gray-300">
            {isExpanded ? description : truncatedDescription}
          </p>
          {/* <button type='button' className='mt-3 px-3 py-2 rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-700  transition-colors' onClick={handleViewMore}>View More</button> */}
          {description.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-indigo-400 hover:text-indigo-300 text-sm mt-2 transition-colors"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppCard;