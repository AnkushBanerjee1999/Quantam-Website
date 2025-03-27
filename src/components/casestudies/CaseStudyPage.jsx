import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CaseStudyPage = ({ app }) => {
  const navigate = useNavigate();

  if (!app) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-500">
          Case Studies not found
        </p>
      </div>
    );
  }

  return (
    <div className="text-white px-6 md:px-12 space-y-10">
      {/* Section 1 - Introduction */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-gray-900 rounded-lg p-6 md:p-10">
        {/* Mobile: Image at Top | Desktop: Image on Right */}
        <div className="order-first md:order-none flex justify-center">
          <img
            src={app.photo}
            alt={app.name}
            className="w-full max-w-xs md:max-w-md rounded-lg object-cover"
            loading="lazy"
          />
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-medium">
            {app.Company.Highlights}
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            {app.Company.Description}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {app.Company.Services.map((service, index) => (
              <button
                key={index}
                className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 - Metrics */}
      <div className="bg-gray-900 p-6 md:p-8 rounded-lg">
        <h2 className="text-2xl font-medium mb-6 text-center md:text-left">
          Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {app.Impact.map((impact, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-lg md:text-xl font-medium mb-2">
                {impact.Metric}
              </h3>
              <p className="text-2xl md:text-3xl font-medium">{impact.Value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 - Challenges */}
      <div className="bg-gray-900 p-6 md:p-8 rounded-lg">
        <h2 className="text-2xl font-medium mb-6 text-center md:text-left">
          Challenges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {app.Challenges.map((challenge, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-gray-800 rounded-lg"
            >
              <span className="h-6 w-6 bg-gray-700 rounded-full mr-4"></span>
              <p>{challenge.Title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 - Solutions */}
      <div className="bg-gray-900 p-6 md:p-8 rounded-lg">
        <h2 className="text-2xl font-medium mb-6 text-center md:text-left">
          Solution
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <p className="text-base md:text-lg leading-relaxed">
              {app.Solution.Description}
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-4">
            {app.Solution.KeyFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-800 rounded-lg"
              >
                <span className="h-6 w-6 bg-gray-700 rounded-full mr-4"></span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
