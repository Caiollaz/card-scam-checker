
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#030303] py-12 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield size={20} className="text-primary mr-2" />
            <span className="font-medium text-white">CardGuard</span>
          </div>
          <div className="text-sm text-white/40">
            Este site foi criado apenas para fins educacionais.
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="text-center text-xs text-white/30">
            <p>
              © {new Date().getFullYear()} CardGuard. Todos os direitos reservados. Este é um site educacional sobre segurança de cartões.
            </p>
            <p className="mt-1">
              Nenhuma informação real é armazenada ou processada.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
