import { Lock } from "lucide-react";
import CardInputField from "./CardInputField";

interface CVCInputProps {
  cvc: string;
  onCvcChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardType?: { name: string } | null;
  error?: string;
}

const CVCInput = ({ cvc, onCvcChange, cardType, error }: CVCInputProps) => {
  return (
    <CardInputField id="cvc" label="CVC/CVV" error={error}>
      <div className="relative">
        <input
          id="cvc"
          type="text"
          value={cvc}
          onChange={onCvcChange}
          placeholder={cardType?.name === "American Express" ? "0000" : "000"}
          className={`w-full pl-9 pr-4 py-2 rounded-md bg-white/10 text-white border ${
            error ? "border-red-300" : "border-gray-700"
          } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
          maxLength={cardType?.name === "American Express" ? 4 : 3}
        />
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
      </div>
    </CardInputField>
  );
};

export default CVCInput;
