
import { ReactNode } from "react";
import { AlertCircle } from "lucide-react";

interface CardInputFieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

const CardInputField = ({ id, label, error, children }: CardInputFieldProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium mb-1 text-white">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-500 flex items-center">
          <AlertCircle className="h-3 w-3 mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

export default CardInputField;
