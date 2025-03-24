
import { CreditCard } from "lucide-react";
import CardInputField from "./CardInputField";

interface CardNumberInputProps {
  cardNumber: string;
  onCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardType?: { name: string } | null;
  error?: string;
}

const CardNumberInput = ({ 
  cardNumber, 
  onCardNumberChange, 
  cardType, 
  error 
}: CardNumberInputProps) => {
  // Function to render the appropriate card brand icon based on card type
  const renderCardBrandIcon = () => {
    if (!cardType) return null;
    
    // Using lowercase card type name for the icon class
    const cardName = cardType.name.toLowerCase();
    
    return (
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <div className={`w-8 h-5 bg-contain bg-no-repeat bg-center`} 
             style={{ backgroundImage: `url(/cards/${cardName}.svg)` }}
             title={cardType.name}></div>
      </div>
    );
  };

  return (
    <CardInputField id="cardNumber" label="Número do Cartão" error={error}>
      <div className="relative">
        <input
          id="cardNumber"
          type="text"
          value={cardNumber}
          onChange={onCardNumberChange}
          placeholder="0000 0000 0000 0000"
          className={`w-full pl-10 pr-12 py-2 rounded-md bg-white/10 text-white border ${
            error ? "border-red-300" : "border-gray-700"
          } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
          maxLength={19}
        />
        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
        {renderCardBrandIcon()}
      </div>
    </CardInputField>
  );
};

export default CardNumberInput;
