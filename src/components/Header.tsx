import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="py-6 px-6 md:px-12 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-50">
      <div className="flex items-center gap-2">
        <span className="text-2xl">📄</span>
        <h1 className="text-xl font-bold tracking-tight">
          <span className="text-blue-600">PDF</span>
          <span className="text-gray-700">Cleaner</span>
        </h1>
      </div>
      <div className="text-[10px] md:text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">
        Graphics Removal Tool
      </div>
    </header>
  );
};
