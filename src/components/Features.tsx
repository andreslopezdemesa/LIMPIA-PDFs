import React from 'react';
import { Shield, Zap, Layout, Globe, Smartphone, CircleDollarSign } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  { icon: Shield, title: "Seguro y privado", desc: "Tus archivos se eliminan automáticamente después del procesamiento." },
  { icon: Zap, title: "Rápido", desc: "Algoritmos optimizados para limpiar tus documentos en segundos." },
  { icon: Layout, title: "Formato intacto", desc: "Mantenemos el texto, las fuentes y la estructura original." },
  { icon: Globe, title: "Sin instalación", desc: "Funciona directamente en tu navegador, sin descargar software." },
  { icon: Smartphone, title: "Responsive", desc: "Limpia tus archivos desde cualquier dispositivo móvil o tablet." },
  { icon: CircleDollarSign, title: "Gratuito", desc: "Uso básico sin costo alguno para todos los usuarios." },
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Características principales</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Diseñado para ofrecerte la mejor experiencia de limpieza de documentos con total seguridad.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <f.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
