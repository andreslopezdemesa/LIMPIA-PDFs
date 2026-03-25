import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, FileText, CheckCircle, RefreshCcw, Loader2 } from 'lucide-react';

export const UploadSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'processing' | 'completed'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFile = (file: File) => {
    if (file.type !== 'application/pdf') {
      alert('Por favor, sube solo archivos PDF.');
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      alert('El archivo supera el límite de 50MB.');
      return;
    }

    setFileName(file.name);
    setStatus('processing');

    // Simulate processing
    setTimeout(() => {
      setStatus('completed');
    }, 3000);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, []);

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const reset = () => {
    setStatus('idle');
    setFileName(null);
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
              className="border-2 border-dashed border-blue-200 rounded-3xl p-12 bg-blue-50/30 text-center hover:border-blue-400 transition-colors group cursor-pointer relative"
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              <input 
                id="fileInput" 
                type="file" 
                accept=".pdf" 
                className="hidden" 
                onChange={onFileSelect}
              />
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Upload className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Haz clic para subir o arrastra un PDF
              </h3>
              <p className="text-gray-500">Solo archivos .pdf (Máx. 50MB)</p>
            </motion.div>
          )}

          {status === 'processing' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="bg-white rounded-3xl p-16 shadow-xl border border-gray-100 text-center"
            >
              <Loader2 className="animate-spin text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Procesando tu PDF...</h3>
              <p className="text-gray-500">Estamos eliminando gráficos e imágenes de "{fileName}"</p>
              <div className="mt-8 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3 }}
                  className="bg-blue-600 h-full"
                />
              </div>
            </motion.div>
          )}

          {status === 'completed' && (
            <motion.div
              key="completed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-12 shadow-xl border border-green-100 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">¡PDF Limpio!</h3>
              <p className="text-gray-500 mb-8">Se han eliminado todos los gráficos de "{fileName}"</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    if (!fileName) return;
                    // Simulación de descarga de archivo procesado
                    const dummyContent = "PDFCleaner: Este es un simulacro de su archivo PDF procesado.\nEn una versión de producción, aquí se entregaría el archivo original sin gráficos.";
                    const blob = new Blob([dummyContent], { type: 'application/pdf' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = fileName.replace(/\.pdf$/i, '') + '_cleaned.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                  }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                >
                  <FileText size={20} />
                  Descargar PDF limpio
                </button>
                <button 
                  onClick={reset}
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCcw size={20} />
                  Nuevo archivo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
