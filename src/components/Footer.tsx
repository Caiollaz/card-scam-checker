import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#030303] py-12 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center mb-6 md:mb-0">
            <Shield size={20} className="text-primary mr-2" />
            <span className="font-medium text-white">CardGuard</span>
          </div>
          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} CardGuard. Todos os direitos
            reservados.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
