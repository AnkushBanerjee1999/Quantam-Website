import React from "react";
import { useNavigate } from "react-router-dom";

const CaseInfo = ({ name, title, bio }) => {
  const navigate = useNavigate();
  const handleViewMore = () => {
    const sanitizedAppName = name.replace(/\s+/g, "-"); // Replace spaces with hyphens
    navigate(`/${sanitizedAppName}`);
  };
  return (
    <div>
      <h2 className="text-2xl font-medium mt-2">{name}</h2>
      {bio.split("\n\n").map((paragraph, index) => (
        <p key={index} className="mt-4 text-gray-300">
          {paragraph.trim()}
        </p>
      ))}
      <button
        className="mt-6 px-4 py-2 rounded-md text-sm bg-indigo-600 hover:bg-indigo-700  transition-colors"
        onClick={handleViewMore}
      >
        Show Details
      </button>
    </div>
  );
};

export default CaseInfo;
