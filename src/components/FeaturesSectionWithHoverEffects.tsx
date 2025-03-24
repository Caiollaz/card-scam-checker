
import { cn } from "@/lib/utils";
import { 
  Check, 
  Shield, 
  AlertTriangle, 
  CreditCard, 
  Lock, 
  Eye, 
  RefreshCcw, 
  Bell 
} from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Verificação Inteligente",
      description:
        "Verificamos se seu cartão está em listas de cartões vazados usando algoritmos avançados.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Análise de Risco",
      description:
        "Avaliamos o risco de seu cartão ter sido comprometido baseado em padrões de fraude recentes.",
      icon: <Check className="h-6 w-6" />,
    },
    {
      title: "Alerta Instantâneo",
      description: "Receba alertas imediatos caso detectemos qualquer atividade suspeita em seu cartão.",
      icon: <AlertTriangle className="h-6 w-6" />,
    },
    {
      title: "Proteção Total",
      description: "Oferecemos proteção completa para todos os tipos de cartões de crédito e débito.",
      icon: <CreditCard className="h-6 w-6" />,
    },
    {
      title: "Segurança Avançada",
      description: "Utilizamos tecnologia de ponta para manter seus dados seguros e protegidos.",
      icon: <Lock className="h-6 w-6" />,
    },
    {
      title: "Monitoramento Contínuo",
      description:
        "Monitoramos continuamente seu cartão para detectar quaisquer sinais de uso fraudulento.",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: "Atualização Constante",
      description:
        "Nossa base de dados é atualizada constantemente com as mais recentes informações sobre fraudes.",
      icon: <RefreshCcw className="h-6 w-6" />,
    },
    {
      title: "Notificações Personalizadas",
      description: "Configure notificações personalizadas para manter-se informado sobre seu cartão.",
      icon: <Bell className="h-6 w-6" />,
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto"
    >
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </motion.div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-white/10",
        (index === 0 || index === 4) && "lg:border-l border-white/10",
        index < 4 && "lg:border-b border-white/10"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/40 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};

export default FeaturesSectionWithHoverEffects;
