
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardForm from "../components/CardForm";
import { Shield, AlertTriangle } from "lucide-react";

const CardCheck = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              <Shield className="h-4 w-4 mr-1" />
              <span>Verificação de Segurança</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Verifique seu cartão de crédito
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Preencha os dados do seu cartão abaixo para verificarmos se ele foi comprometido em algum vazamento de dados.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
            <div className="flex items-start mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium text-amber-800 mb-1">Informação Importante</h3>
                <p className="text-sm text-amber-700">
                  Esta é uma ferramenta educacional sobre fraudes de cartão. Suas informações são processadas localmente e não são armazenadas ou transmitidas.
                </p>
              </div>
            </div>
            
            <CardForm />
          </div>
          
          <div className="bg-secondary/50 border border-border/50 rounded-lg p-6">
            <h3 className="font-medium mb-3 text-lg">
              Como proteger seus cartões?
            </h3>
            <ul className="space-y-2 text-muted-foreground">
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CardCheck;
