"use client";
import React, { useState } from 'react';

interface DockerItemProps {
  image: string;
  name: string;
}

const DockerItem: React.FC<DockerItemProps> = ({ image, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group relative flex flex-col items-center">
      {/* Dock Item */}
      <div
        className="relative transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-800/20 backdrop-blur-sm shadow-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Reflection Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent transform scale-y-[-0.25] blur-sm opacity-50" />

        {/* Hover Dot */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gray-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      {/* Label */}
      <div
        className={`absolute -top-12 px-3 py-1 rounded-md bg-[#1a1a1a] text-white text-sm
          transition-all duration-200 shadow-lg ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        {name}
      </div>
    </div>
  );
};

export default DockerItem;