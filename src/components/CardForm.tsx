
import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { 
  getCardType, 
  formatCardNumber, 
  validateCardNumber,
  validateExpiryDate,
  validateCVC
} from "../utils/cardUtils";
import { CreditCard, Calendar, Lock, CheckCircle, AlertCircle } from "lucide-react";

const CardForm = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    cardNumber: "",
    cardholderName: "",
    expiry: "",
    cvc: ""
  });

  const cardType = getCardType(cardNumber);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatCardNumber(value);
    setCardNumber(formatted);
    
    if (errors.cardNumber && validateCardNumber(formatted)) {
      setErrors({ ...errors, cardNumber: "" });
    }
  };

  const handleExpiryMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setExpiryMonth(value);
    
    if (errors.expiry && validateExpiryDate(value, expiryYear)) {
      setErrors({ ...errors, expiry: "" });
    }
  };

  const handleExpiryYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setExpiryYear(value);
    
    if (errors.expiry && validateExpiryDate(expiryMonth, value)) {
      setErrors({ ...errors, expiry: "" });
    }
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, cardType?.name === "American Express" ? 4 : 3);
    setCvc(value);
    
    if (errors.cvc && validateCVC(value, cardType)) {
      setErrors({ ...errors, cvc: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      cardNumber: "",
      cardholderName: "",
      expiry: "",
      cvc: ""
    };
    
    let isValid = true;
    
    if (!validateCardNumber(cardNumber)) {
      newErrors.cardNumber = "Número de cartão inválido";
      isValid = false;
    }
    
    if (!cardholderName.trim()) {
      newErrors.cardholderName = "Nome do titular é obrigatório";
      isValid = false;
    }
    
    if (!validateExpiryDate(expiryMonth, expiryYear)) {
      newErrors.expiry = "Data de validade inválida";
      isValid = false;
    }
    
    if (!validateCVC(cvc, cardType)) {
      newErrors.cvc = "CVC inválido";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        navigate("/results", { 
          state: { 
            cardType: cardType?.name || "Cartão",
            lastFour: cardNumber.slice(-4)
          } 
        });
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <div className="card-container relative">
        <div 
          className="card-shine glass p-6 rounded-xl shadow-sm border border-primary/20"
        >
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium mb-1 text-white">
              Número do Cartão
            </label>
            <div className="relative">
              <input
                id="cardNumber"
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="0000 0000 0000 0000"
                className={`w-full pl-10 pr-4 py-2 rounded-md bg-white/10 text-white border ${
                  errors.cardNumber ? "border-red-300" : "border-gray-700"
                } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
                maxLength={19}
              />
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              {cardType && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 font-medium text-sm text-primary">
                  {cardType.name}
                </div>
              )}
            </div>
            {errors.cardNumber && (
              <p className="mt-1 text-xs text-red-500 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.cardNumber}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="cardholderName" className="block text-sm font-medium mb-1 text-white">
              Nome do Titular
            </label>
            <input
              id="cardholderName"
              type="text"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              placeholder="Nome como está no cartão"
              className={`w-full px-4 py-2 rounded-md bg-white/10 text-white border ${
                errors.cardholderName ? "border-red-300" : "border-gray-700"
              } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
            />
            {errors.cardholderName && (
              <p className="mt-1 text-xs text-red-500 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.cardholderName}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Data de Validade
              </label>
              <div className="flex space-x-2 items-center">
                <div className="relative flex-1">
                  <select
                    value={expiryMonth}
                    onChange={handleExpiryMonthChange}
                    className={`w-full appearance-none pl-8 pr-4 py-2 rounded-md bg-white/10 text-white border ${
                      errors.expiry ? "border-red-300" : "border-gray-700"
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
                    onChange={handleExpiryYearChange}
                    className={`w-full appearance-none px-3 py-2 rounded-md bg-white/10 text-white border ${
                      errors.expiry ? "border-red-300" : "border-gray-700"
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
              {errors.expiry && (
                <p className="mt-1 text-xs text-red-500 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.expiry}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="cvc" className="block text-sm font-medium mb-1 text-white">
                CVC/CVV
              </label>
              <div className="relative">
                <input
                  id="cvc"
                  type="text"
                  value={cvc}
                  onChange={handleCvcChange}
                  placeholder={cardType?.name === "American Express" ? "0000" : "000"}
                  className={`w-full pl-9 pr-4 py-2 rounded-md bg-white/10 text-white border ${
                    errors.cvc ? "border-red-300" : "border-gray-700"
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200`}
                  maxLength={cardType?.name === "American Express" ? 4 : 3}
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              </div>
              {errors.cvc && (
                <p className="mt-1 text-xs text-red-500 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.cvc}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 rounded-md bg-primary text-white font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Verificando...
          </>
        ) : (
          <>
            <CheckCircle className="mr-2 h-5 w-5" />
            Verificar Cartão
          </>
        )}
      </button>
    </form>
  );
};

export default CardForm;
