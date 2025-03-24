import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  AlertTriangle,
  ShieldAlert,
  Shield,
  Info,
  ArrowLeft,
} from "lucide-react";
import ElegantShape from "../components/ElegantShape";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { cardType: string; lastFour: string } | null;

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!state) {
      navigate("/check");
    }
  }, [state, navigate]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
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

  if (!state) return null;

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
            gradient="from-red-500/[0.1]"
            className="right-[-5%] top-[10%]"
          />

          <ElegantShape
            delay={0.5}
            width={300}
            height={80}
            rotate={12}
            gradient="from-amber-500/[0.1]"
            className="left-[-5%] bottom-[20%]"
          />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl">
          <motion.div
            variants={fadeUpVariants}
            custom={0}
            initial="hidden"
            animate="visible"
            className="text-center mb-8"
          >
            <div className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-400 mb-4">
              <ShieldAlert className="h-4 w-4 mr-1" />
              <span>Alerta de Segurança</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Você caiu em um golpe!
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto">
              Esta foi uma simulação de site fraudulento. Nunca compartilhe os
              dados do seu cartão em sites desconhecidos.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            custom={1}
            initial="hidden"
            animate="visible"
            className="bg-white/[0.03] backdrop-blur-sm rounded-xl shadow-lg border border-white/10 p-6 md:p-8 mb-8 text-center"
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-10 w-10 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Isso foi uma simulação
              </h2>
              <p className="text-lg text-white/60">
                {state.cardType} •••• •••• •••• {state.lastFour}
              </p>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-6 text-left">
              <div className="flex">
                <Info className="h-5 w-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-amber-100/80">
                  <strong>Fique tranquilo:</strong> Nenhuma informação foi
                  armazenada ou transmitida. Todos os dados foram processados
                  apenas no seu navegador.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white">
              Por que criamos esta simulação?
            </h3>
            <p className="text-white/40 mb-6">
              Sites fraudulentos como este são criados todos os dias para roubar
              dados de cartões. Conhecer como eles funcionam é fundamental para
              se proteger.
            </p>

            <div className="bg-white/[0.03] border border-white/10 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-3 text-white">
                Como se proteger de golpes reais:
              </h4>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/60">
                    Sempre verifique se o site possui HTTPS (cadeado) e se o
                    domínio é oficial
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/60">
                    Desconfie de ofertas muito vantajosas ou urgentes
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/60">
                    Nunca compartilhe o código de segurança (CVV) por telefone
                    ou email
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/60">
                    Ative as notificações por SMS ou app do seu banco para cada
                    transação
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/60">
                    Em caso de dúvida, entre em contato diretamente com seu
                    banco pelos canais oficiais
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            custom={2}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center px-5 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] text-white/70 font-medium hover:bg-white/[0.05] transition-all backdrop-blur-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
