
import { Calendar } from "lucide-react";
import CardInputField from "./CardInputField";

interface ExpiryDateInputsProps {
  expiryMonth: string;
  expiryYear: string;
  onExpiryMonthChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onExpiryYearChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const ExpiryDateInputs = ({
  expiryMonth,
  expiryYear,
  onExpiryMonthChange,
  onExpiryYearChange,
  error
}: ExpiryDateInputsProps) => {
  return (
    <CardInputField id="expiry" label="Data de Validade" error={error}>
      <div className="flex space-x-2 items-center">
        <div className="relative flex-1">
          <select
            value={expiryMonth}
            onChange={onExpiryMonthChange}
            className={`w-full appearance-none pl-8 pr-4 py-2 rounded-md bg-white/10 text-white border ${
              error ? "border-red-300" : "border-gray-700"
            } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
          >
            <option value="" className="bg-[#121212] text-white">MM</option>
            {Array.from({ length: 12 }, (_, i) => {
              const month = i + 1;
              return (
                <option key={month} value={month.toString().padStart(2, "0")} className="bg-[#121212] text-white">
                  {month.toString().padStart(2, "0")}
                </option>
              );
            })}
          </select>
          <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
        </div>
        <span className="text-white/60">/</span>
        <div className="relative flex-1">
          <select
            value={expiryYear}
            onChange={onExpiryYearChange}
            className={`w-full appearance-none px-3 py-2 rounded-md bg-white/10 text-white border ${
              error ? "border-red-300" : "border-gray-700"
            } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
          >
            <option value="" className="bg-[#121212] text-white">AA</option>
            {Array.from({ length: 11 }, (_, i) => {
              const year = new Date().getFullYear() % 100 + i;
              return (
                <option key={year} value={year.toString().padStart(2, "0")} className="bg-[#121212] text-white">
                  {year}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </CardInputField>
  );
};

export default ExpiryDateInputs;
