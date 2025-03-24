import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  formatCardNumber,
  getCardType,
  validateCardNumber,
  validateCVC,
  validateExpiryDate,
} from "../utils/cardUtils";
import CVCInput from "./CVCInput";
import CardNumberInput from "./CardNumberInput";
import CardholderNameInput from "./CardholderNameInput";
import ExpiryDateInputs from "./ExpiryDateInputs";
import SubmitButton from "./SubmitButton";

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
    cvc: "",
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
    const value = e.target.value
      .replace(/\D/g, "")
      .substring(0, cardType?.name === "American Express" ? 4 : 3);
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
      cvc: "",
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

      // Simular chamada de API
      setTimeout(() => {
        setLoading(false);
        navigate("/results", {
          state: {
            cardType: cardType?.name || "Cartão",
            lastFour: cardNumber.slice(-4),
          },
        });
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <div className="card-container relative">
        <div className="card-shine glass p-6 rounded-xl shadow-sm border border-primary/20">
          <CardNumberInput
            cardNumber={cardNumber}
            onCardNumberChange={handleCardNumberChange}
            cardType={cardType}
            error={errors.cardNumber}
          />

          <CardholderNameInput
            cardholderName={cardholderName}
            onCardholderNameChange={(e) => setCardholderName(e.target.value)}
            error={errors.cardholderName}
          />

          <div className="grid grid-cols-2 gap-4">
            <ExpiryDateInputs
              expiryMonth={expiryMonth}
              expiryYear={expiryYear}
              onExpiryMonthChange={handleExpiryMonthChange}
              onExpiryYearChange={handleExpiryYearChange}
              error={errors.expiry}
            />

            <CVCInput
              cvc={cvc}
              onCvcChange={handleCvcChange}
              cardType={cardType}
              error={errors.cvc}
            />
          </div>
        </div>
      </div>

      <SubmitButton loading={loading} />
    </form>
  );
};

export default CardForm;
