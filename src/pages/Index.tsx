
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Circle, Shield, ArrowRight, CreditCard, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ElegantShape from "../components/ElegantShape";
import FeaturesSectionWithHoverEffects from "../components/FeaturesSectionWithHoverEffects";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

          <div className="absolute inset-0 overflow-hidden">
            <ElegantShape
              delay={0.3}
              width={600}
              height={140}
              rotate={12}
              gradient="from-primary/[0.15]"
              className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            />

            <ElegantShape
              delay={0.5}
              width={500}
              height={120}
              rotate={-15}
              gradient="from-rose-500/[0.15]"
              className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            />

            <ElegantShape
              delay={0.4}
              width={300}
              height={80}
              rotate={-8}
              gradient="from-violet-500/[0.15]"
              className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            />

            <ElegantShape
              delay={0.6}
              width={200}
              height={60}
              rotate={20}
              gradient="from-amber-500/[0.15]"
              className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
            />

            <ElegantShape
              delay={0.7}
              width={150}
              height={40}
              rotate={-25}
              gradient="from-cyan-500/[0.15]"
              className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
              >
                <Circle className="h-2 w-2 fill-primary/80" />
                <span className="text-sm text-white/60 tracking-wide">
                  Proteção de Cartões
                </span>
              </motion.div>

              <motion.div
                custom={1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                    Verifique se seu cartão
                  </span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-white/90 to-rose-300">
                    foi comprometido
                  </span>
                </h1>
              </motion.div>

              <motion.div
                custom={2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                  Nossa ferramenta avançada verifica se seu cartão foi clonado ou comprometido em vazamentos de dados recentes.
                </p>
              </motion.div>

              <motion.div
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
              >
                <Link
                  to="/check"
                  className="px-6 py-3 rounded-lg bg-primary text-white font-medium flex items-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 group"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Verificar Cartão Agora
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/"
                  className="px-6 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white/70 font-medium hover:bg-white/[0.05] transition-all backdrop-blur-sm"
                >
                  Como Funciona
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </section>
        
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
        <section className="py-20 px-4 bg-[#030303]">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm"
            >
              <div className="md:max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Proteja seus cartões agora mesmo
                </h2>
                <p className="text-white/40 mb-6">
                  Não espere para descobrir se seus dados financeiros foram comprometidos. Faça uma verificação rápida e gratuita agora.
                </p>
                <Link
                  to="/check"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
                >
                  Verificar Cartão
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="md:w-1/2 lg:w-2/5">
                <div className="bg-white/[0.03] p-6 rounded-xl border border-white/10 card-shine backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium text-white">CardGuard</span>
                    </div>
                    <span className="text-sm text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full flex items-center border border-green-400/20">
                      <Check className="h-3 w-3 mr-1" />
                      Protegido
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full"></div>
                    </div>
                    <div className="text-xs text-white/40 flex justify-between">
                      <span>Status de proteção</span>
                      <span>75% completo</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
