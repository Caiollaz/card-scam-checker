
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link
          to="/"
          className="flex items-center space-x-2 transition-opacity duration-200 hover:opacity-80"
        >
          <Shield size={24} className="text-primary" />
          <span className="font-medium text-lg">CardGuard</span>
        </Link>

        <nav className="flex items-center space-x-1 md:space-x-2">
          <Link
            to="/"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary transition-colors"
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
    </header>
  );
};

export default Navbar;
