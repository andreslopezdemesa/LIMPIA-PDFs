import React from 'react';
import { FileUp, Cpu, Download } from 'lucide-react';

const steps = [
  { icon: FileUp, title: "Sube tu PDF", desc: "Arrastra o selecciona el archivo PDF que deseas limpiar." },
  { icon: Cpu, title: "Procesamiento", desc: "Nuestro algoritmo detecta y elimina imágenes, gráficos y vectores." },
  { icon: Download, title: "Descarga", desc: "Obtén tu PDF limpio con solo el texto en segundos." },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">¿Cómo funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-blue-100 -z-10"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-100/50 relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <step.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
