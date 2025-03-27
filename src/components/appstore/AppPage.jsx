import React from "react";
import { useNavigate } from "react-router-dom";

const AppPage = ({ app }) => {
  const navigate = useNavigate();
  if (!app) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-500">App not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto overflow-hidden">
      <button
      onClick={() => navigate(-1)}
      >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
<path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
</svg>
      </button>
        {/* Header */}
        <div className="p-6 text-white">
          <h1 className="text-3xl font-medium">{app.name}</h1>
          <p className="mt-2 text-sm">{app.category}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <p className="text-gray-300 text-lg mb-6">{app.description}</p>

          {/* Video and Thumbnail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Video Section */}
            <div>
              <h2 className="text-xl font-semibold mb-2">App Video</h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md overflow-hidden">
                <iframe
                  src={app.videoUrl}
                  title="App Video"
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Thumbnail Section */}
            <div>
              <h2 className="text-xl font-semibold mb-2">App Thumbnail</h2>
              <img
                src={app.thumbnailUrl}
                alt={`${app.name} Thumbnail`}
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
