
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";
import FeaturesSectionWithHoverEffects from "../components/FeaturesSectionWithHoverEffects";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-[#030303] px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                Proteção completa para seus cartões
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-white/40 max-w-2xl mx-auto"
              >
                Nosso sistema realiza diversas verificações para garantir que seus cartões estão seguros.
              </motion.p>
            </div>
            
            <FeaturesSectionWithHoverEffects />
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
