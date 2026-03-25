import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-12 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
          Limpia tu PDF de gráficos
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Elimina imágenes, gráficos y dibujos vectoriales manteniendo el texto original y su formato intacto.
        </p>
      </motion.div>
    </section>
  );
};
