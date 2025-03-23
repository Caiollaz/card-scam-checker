
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#030303]/80 backdrop-blur-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link
          to="/"
          className="flex items-center space-x-2 transition-opacity duration-200 hover:opacity-80"
        >
          <Shield size={24} className="text-primary" />
          <span className="font-medium text-lg text-white">CardGuard</span>
        </Link>

        <nav className="flex items-center space-x-1 md:space-x-2">
          <Link
            to="/"
            className="px-3 py-2 rounded-md text-sm font-medium text-white/70 hover:text-primary transition-colors"
          >
            Início
          </Link>
          <Link
            to="/check"
            className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Verificar Cartão
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
