import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UploadSection } from './components/UploadSection';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      <main>
        <Hero />
        <UploadSection />
        <HowItWorks />
        <Features />
        <FAQ />
      </main>

      <Footer />
      
      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
}
