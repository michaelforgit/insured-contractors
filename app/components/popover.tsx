// components/Popover.tsx

"use client";

import React, { useState } from 'react';

interface PopoverProps {
  triggerText: string;
  content: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ triggerText, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseExit = () => {
    setIsOpen(false)
  }

  return (
    <div className="col-span-1">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        type="button"
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-center text-xs md:text-sm"
      >
        {triggerText}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow-lg">
          <div className="py-1">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
