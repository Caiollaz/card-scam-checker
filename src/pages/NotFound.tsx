
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft } from "lucide-react";
import ElegantShape from "../components/ElegantShape";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
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
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/10 p-8 max-w-md mx-auto"
        >
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-10 w-10 text-red-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
          <p className="text-xl text-white/60 mb-6">Oops! Página não encontrada</p>
          <a 
            href="/" 
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar para o início
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
