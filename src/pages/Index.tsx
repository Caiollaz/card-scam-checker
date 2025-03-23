
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, AlertTriangle, CreditCard } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-6 animate-fade-in">
              <Shield className="h-4 w-4 mr-1" />
              <span>Proteção contra fraudes</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance animate-slide-in">
              Verifique se seu cartão foi comprometido
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in opacity-90">
              Nossa ferramenta avançada verifica se seu cartão foi clonado ou comprometido em algum vazamento de dados. Proteja suas finanças agora.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in opacity-95">
              <Link
                to="/check"
                className="px-6 py-3 rounded-lg bg-primary text-white font-medium flex items-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Verificar Cartão Agora
              </Link>
              <Link
                to="/"
                className="px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-all"
              >
                Como Funciona
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proteção completa para seus cartões
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nosso sistema realiza diversas verificações para garantir que seus cartões estão seguros.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verificação Inteligente</h3>
                <p className="text-muted-foreground">
                  Verificamos se seu cartão está em listas de cartões vazados usando algoritmos avançados.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Análise de Risco</h3>
                <p className="text-muted-foreground">
                  Avaliamos o risco de seu cartão ter sido comprometido baseado em padrões de fraude recentes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Alerta Instantâneo</h3>
                <p className="text-muted-foreground">
                  Receba alertas imediatos caso detectemos qualquer atividade suspeita em seu cartão.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Proteja seus cartões agora mesmo
                </h2>
                <p className="text-muted-foreground mb-6">
                  Não espere para descobrir se seus dados financeiros foram comprometidos. Faça uma verificação rápida e gratuita agora.
                </p>
                <Link
                  to="/check"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Verificar Cartão
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/2 lg:w-2/5">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-shine">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">CardGuard</span>
                    </div>
                    <span className="text-sm text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Protegido
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full"></div>
                    </div>
                    <div className="text-xs text-muted-foreground flex justify-between">
                      <span>Status de proteção</span>
                      <span>75% completo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
