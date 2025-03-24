
import CardInputField from "./CardInputField";

interface CardholderNameInputProps {
  cardholderName: string;
  onCardholderNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const CardholderNameInput = ({ 
  cardholderName, 
  onCardholderNameChange, 
  error 
}: CardholderNameInputProps) => {
  return (
    <CardInputField id="cardholderName" label="Nome do Titular" error={error}>
      <input
        id="cardholderName"
        type="text"
        value={cardholderName}
        onChange={onCardholderNameChange}
        placeholder="Nome como está no cartão"
        className={`w-full px-4 py-2 rounded-md bg-white/10 text-white border ${
          error ? "border-red-300" : "border-gray-700"
        } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
      />
    </CardInputField>
  );
};

export default CardholderNameInput;
