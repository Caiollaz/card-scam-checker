import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Circle, Shield, ArrowRight, CreditCard, Check, Lock, ShieldCheck } from "lucide-react";
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
          <div className="container mx-auto max-w-6xl relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <ElegantShape
                delay={0.2}
                width={400}
                height={100}
                rotate={-5}
                gradient="from-primary/[0.15]"
                className="right-[10%] top-[30%]"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-primary to-rose-500/60"></div>
              
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span className="text-sm text-white/90 font-medium">Proteção Avançada</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Seus dados ficam <span className="text-primary relative inline-block px-1">
                      <span className="relative z-10">ainda mais protegidos</span>
                      <span className="absolute inset-0 bg-primary/10 rounded-md blur-[2px] z-0"></span>
                    </span> com CardGuard
                  </h2>
                  
                  <p className="text-white/60 text-lg">
                    Nossa tecnologia de ponta garante total proteção contra vazamentos, clonagens e fraudes. Veja agora mesmo se seus cartões estão seguros.
                  </p>
                  
                  <Link
                    to="/check"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
                  >
                    <Lock className="h-5 w-5 mr-2" />
                    Verificar Cartão Agora
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                
                <div className="relative">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl"></div>
                  
                  <div className="card-shine bg-white/[0.03] border border-white/10 rounded-xl p-6 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/15 border border-primary/20">
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium text-xl text-white">CardGuard</span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 flex items-center">
                        <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                        <span className="text-xs font-medium text-green-500">Verificado</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Proteção de dados</span>
                          <span className="text-white/90 font-medium">100%</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-gradient-to-r from-primary to-primary-300 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Verificação anti-fraude</span>
                          <span className="text-white/90 font-medium">Ativa</span>
                        </div>
                        <div className="flex gap-2 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex-1 h-2 bg-primary/80 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-white/[0.03] p-3 rounded-lg border border-white/10">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-xs text-white/60">Status do cartão</div>
                          <div className="text-sm font-medium text-white">Protegido pela CardGuard</div>
                        </div>
                      </div>
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
