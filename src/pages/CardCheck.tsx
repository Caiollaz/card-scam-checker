
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardForm from "../components/CardForm";
import { Shield, Lock, CreditCard } from "lucide-react";
import ElegantShape from "../components/ElegantShape";

const CardCheck = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-[#030303]">
      <Navbar />
      
      <main className="relative flex-grow pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <ElegantShape
            delay={0.3}
            width={500}
            height={120}
            rotate={-8}
            gradient="from-primary/[0.1]"
            className="right-[-5%] top-[10%]"
          />
          
          <ElegantShape
            delay={0.5}
            width={400}
            height={100}
            rotate={12}
            gradient="from-violet-500/[0.1]"
            className="left-[-5%] bottom-[20%]"
          />
          
          <ElegantShape
            delay={0.7}
            width={200}
            height={60}
            rotate={-15}
            gradient="from-rose-500/[0.1]"
            className="right-[20%] bottom-[30%]"
          />
        </div>
      
        <div className="container relative z-10 mx-auto max-w-4xl">
          <motion.div 
            variants={fadeVariants}
            custom={0}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
              <Shield className="h-4 w-4 mr-1" />
              <span>Verificação de Segurança</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Verifique seu cartão 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-primary to-rose-300 ml-2">
                com segurança
              </span>
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              Preencha os dados do seu cartão abaixo para verificarmos se ele foi comprometido em algum vazamento de dados.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeVariants}
            custom={1}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-rose-500/5 rounded-xl blur-xl"></div>
            <div className="card-shine bg-white/[0.03] backdrop-blur-sm rounded-xl shadow-lg border border-white/10 p-6 md:p-8 mb-8 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-primary to-rose-500/60"></div>
              <CardForm />
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeVariants}
            custom={2}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/15">
                  <Lock className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium text-lg text-white">Como proteger seus dados</h3>
              </div>
              <ul className="space-y-3 text-white/40">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>Nunca compartilhe os dados do seu cartão em sites ou aplicativos não confiáveis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>Ative as notificações de transações do seu banco</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>Use sempre serviços de pagamento com autenticação de dois fatores</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/15">
                  <CreditCard className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium text-lg text-white">Proteção de cartões</h3>
              </div>
              <ul className="space-y-3 text-white/40">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>Verifique regularmente seu extrato para identificar transações suspeitas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>Não clique em links suspeitos recebidos por email ou SMS</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>Utilize senhas fortes e diferentes para cada serviço online</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CardCheck;
