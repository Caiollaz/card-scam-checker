
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AlertTriangle, ShieldAlert, Shield, Info, ArrowLeft } from "lucide-react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { cardType: string; lastFour: string } | null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // If navigated directly without data, redirect to check
    if (!state) {
      navigate("/check");
    }
  }, [state, navigate]);
  
  if (!state) return null;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm text-red-600 mb-4">
              <ShieldAlert className="h-4 w-4 mr-1" />
              <span>Alerta de Segurança</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Você caiu em um golpe educativo!
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Esta foi uma simulação de site fraudulento para fins educacionais. Nunca compartilhe os dados do seu cartão em sites desconhecidos.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8 text-center">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-10 w-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Isso foi uma simulação
              </h2>
              <p className="text-lg text-gray-600">
                {state.cardType} •••• •••• •••• {state.lastFour}
              </p>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-left">
              <div className="flex">
                <Info className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-amber-800">
                  <strong>Fique tranquilo:</strong> Esta é uma demonstração educativa. Nenhuma informação foi armazenada ou transmitida. Todos os dados foram processados apenas no seu navegador.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">
              Por que criamos esta simulação?
            </h3>
            <p className="text-gray-600 mb-6">
              Sites fraudulentos como este são criados todos os dias para roubar dados de cartões. Conhecer como eles funcionam é fundamental para se proteger.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-3">Como se proteger de golpes reais:</h4>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sempre verifique se o site possui HTTPS (cadeado) e se o domínio é oficial</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Desconfie de ofertas muito vantajosas ou urgentes</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Nunca compartilhe o código de segurança (CVV) por telefone ou email</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ative as notificações por SMS ou app do seu banco para cada transação</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Em caso de dúvida, entre em contato diretamente com seu banco pelos canais oficiais</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
