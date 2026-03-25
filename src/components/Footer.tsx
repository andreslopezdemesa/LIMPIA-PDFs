import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-100 bg-gray-50/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <span className="text-xl">📄</span>
          <span className="font-bold text-sm">
            <span className="text-blue-600">PDF</span>
            <span className="text-gray-700">Cleaner</span>
          </span>
        </div>
        
        <div className="text-gray-400 text-sm">
          © 2025 PDFCleaner. Todos los derechos reservados.
        </div>
        
        <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
          ¿Necesitas ayuda? Usa nuestro chat de soporte →
        </div>
      </div>
    </footer>
  );
};
