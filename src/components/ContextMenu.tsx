"use client";

import { useState, useEffect } from "react";

const ContextMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClick = () => {
      setIsVisible(false);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();

    setPosition({ x: e.pageX, y: e.pageY });
    setIsVisible(true);
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return isVisible ? (
    <div
      className="fixed bg-[var(--context-menu)] text-black font-medium p-1 w-56 rounded shadow-lg border border-gray-300"
      style={{
        top: position.y,
        left: position.x,
        zIndex: 9999,
      }}
    >
      <ul className="space-y-2">
        <li className="hover:bg-[var(--custom-blue)] hover:text-white px-[10px] rounded cursor-pointer">
          Option 1
        </li>
        <li className="hover:bg-[var(--custom-blue)] hover:text-white px-[10px] rounded cursor-pointer">
          Option 2
        </li>
        <li className="hover:bg-[var(--custom-blue)] hover:text-white px-[10px] rounded cursor-pointer">
          Option 3
        </li>
        <li className="hover:bg-[var(--custom-blue)] hover:text-white px-[10px] rounded cursor-pointer">
          Option 4
        </li>
        <li className="hover:bg-[var(--custom-blue)] hover:text-white px-[10px] rounded cursor-pointer">
          Option 5
        </li>
        <li className="hover:bg-[var(--custom-blue)] hover:text-white px-[10px] rounded cursor-pointer">
          Option 6
        </li>
      </ul>
    </div>
  ) : null;
};

export default ContextMenu;
