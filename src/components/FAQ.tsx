import React from 'react';
import { motion } from 'motion/react';

const faqs = [
  {
    q: "¿Qué tipo de gráficos elimina PDFCleaner?",
    a: "Eliminamos imágenes (JPG, PNG, GIF), gráficos estadísticos, dibujos vectoriales, logotipos y fondos complejos. Conservamos todo el texto, tablas y la estructura del documento."
  },
  {
    q: "¿Se modifica el texto del documento?",
    a: "No. El texto original, las fuentes, los hipervínculos y la paginación se mantienen exactamente iguales. Solo removemos los elementos visuales que no son texto."
  },
  {
    q: "¿Cuál es el tamaño máximo de archivo?",
    a: "Actualmente permitimos archivos de hasta 50MB. Para archivos más grandes, te recomendamos dividirlos en partes antes de procesarlos."
  },
  {
    q: "¿Mis archivos están seguros?",
    a: "Absolutamente. Usamos cifrado SSL para la transferencia y eliminamos todos los archivos de nuestros servidores de forma permanente una vez finalizado el procesamiento."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={false}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-gray-800 group-open:bg-blue-50/50 transition-colors">
                {faq.q}
                <span className="text-blue-600 transition-transform group-open:rotate-180">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="p-6 text-gray-600 border-t border-gray-50 leading-relaxed">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};
