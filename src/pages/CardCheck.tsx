
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardForm from "../components/CardForm";
import { Shield } from "lucide-react";
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
            width={400}
            height={100}
            rotate={-8}
            gradient="from-primary/[0.1]"
            className="right-[-5%] top-[10%]"
          />
          
          <ElegantShape
            delay={0.5}
            width={300}
            height={80}
            rotate={12}
            gradient="from-violet-500/[0.1]"
            className="left-[-5%] bottom-[20%]"
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
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              <Shield className="h-4 w-4 mr-1" />
              <span>Verificação de Segurança</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Verifique seu cartão de crédito
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto">
              Preencha os dados do seu cartão abaixo para verificarmos se ele foi comprometido em algum vazamento de dados.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeVariants}
            custom={1}
            initial="hidden"
            animate="visible"
            className="bg-white/[0.03] backdrop-blur-sm rounded-xl shadow-lg border border-white/10 p-6 md:p-8 mb-8"
          >
            <CardForm />
          </motion.div>
          
          <motion.div 
            variants={fadeVariants}
            custom={2}
            initial="hidden"
            animate="visible"
            className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-6"
          >
            <h3 className="font-medium mb-3 text-lg text-white">
              Como proteger seus cartões?
            </h3>
            <ul className="space-y-2 text-white/40">
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
                <span>Verifique regularmente seu extrato para identificar transações suspeitas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5 text-primary">•</span>
                <span>Use sempre serviços de pagamento com autenticação de dois fatores</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CardCheck;
