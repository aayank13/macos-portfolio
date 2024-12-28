import React from 'react';
import DockerItem from './DockerItem';

const Dock = () => {
  const dockItems = [
    {
      name: "Finder",
      image: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/b0bfe333ca52837f20de43aa34cd60a8_low_res_Finder.png"
    },
    {
      name: "Launchpad",
      image: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/bb6cdfc3456ac1ec1ccf938473dd52aa_low_res_Launchpad.png"
    },
    {
      name: "Safari",
      image: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/8204ffaf2c6f9f46a1a803a96c91e7d5_low_res_Safari.png"
    },
    {
      name: "Bin",
      image: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/fd532af3c875e1ba69b176d5d0540455_KtswXfzQ5b.png"
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center mb-2">
      <div className="flex items-center gap-2 p-2 rounded-2xl bg-white/40 backdrop-blur-md border border-gray-600/20 shadow-lg">
        {/* Divider before system apps */}
        <div className="flex items-center gap-2">
          {dockItems.slice(0, -1).map((item, index) => (
            <DockerItem
              key={index}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
        
        {/* Vertical Divider */}
        <div className="w-px h-8 bg-white/20 mx-1" />
        
        {/* Bin at the end */}
        <div>
          {dockItems.slice(-1).map((item) => (
            <DockerItem
              key={item.name}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dock;