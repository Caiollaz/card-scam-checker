
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Lock, Check, ArrowRight, CreditCard, ShieldCheck } from "lucide-react";
import ElegantShape from "./ElegantShape";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
