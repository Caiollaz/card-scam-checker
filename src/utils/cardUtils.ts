
type CardType = {
  name: string;
  pattern: RegExp;
  icon: string;
  mask: string;
};

export const cardTypes: CardType[] = [
  {
    name: "Visa",
    pattern: /^4/,
    icon: "visa",
    mask: "#### #### #### ####",
  },
  {
    name: "Mastercard",
    pattern: /^(5[1-5]|2[2-7])/,
    icon: "mastercard",
    mask: "#### #### #### ####",
  },
  {
    name: "American Express",
    pattern: /^3[47]/,
    icon: "amex",
    mask: "#### ###### #####",
  },
  {
    name: "Discover",
    pattern: /^(6011|65|64[4-9]|622)/,
    icon: "discover",
    mask: "#### #### #### ####",
  },
  {
    name: "Diners",
    pattern: /^(36|38|30[0-5])/,
    icon: "diners",
    mask: "#### ###### ####",
  },
  {
    name: "JCB",
    pattern: /^35/,
    icon: "jcb",
    mask: "#### #### #### ####",
  },
  {
    name: "Elo",
    pattern: /^(4011|438935|45(1416|76|7393)|50(4175|6699|67|90[4-7])|63(6297|6368)|65003[1-3]|6504(0[5-9]|1[0-9]|2[0-9]|3[0-9])|6504(8[5-9]|9[0-9])|6505(0[1-9]|1[0-9]|2[0-9]|3[0-8])|6505(4[1-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-8])|6507(0[0-9]|1[0-8])|65072[0-7]|6509(0[1-9]|1[0-9]|20)|6516(5[2-9]|6[0-9]|7[0-9])|6550(0[0-9]|1[0-9])|6550(2[1-9]|3[0-9]|4[0-9]|5[0-8]))/,
    icon: "elo",
    mask: "#### #### #### ####",
  },
  {
    name: "Hipercard",
    pattern: /^(606282|3841)/,
    icon: "hipercard",
    mask: "#### #### #### ####",
  },
];

export const getCardType = (cardNumber: string): CardType | undefined => {
  const cleanNumber = cardNumber.replace(/\s+/g, "");
  return cardTypes.find((card) => card.pattern.test(cleanNumber));
};

export const formatCardNumber = (value: string): string => {
  const cleanValue = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const cardType = getCardType(cleanValue);
  
  if (!cardType) {
    // Default formatting: groups of 4 digits
    const groups = cleanValue.match(/.{1,4}/g);
    return groups ? groups.join(" ") : cleanValue;
  }
  
  // Apply card-specific formatting
  const mask = cardType.mask;
  let result = "";
  let index = 0;
  
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === "#") {
      if (index < cleanValue.length) {
        result += cleanValue[index];
        index++;
      }
    } else {
      if (index < cleanValue.length) {
        result += mask[i];
      }
    }
  }
  
  return result.trim();
};

export const validateCardNumber = (cardNumber: string): boolean => {
  const cleanNumber = cardNumber.replace(/\s+/g, "");
  
  // Basic length check
  if (cleanNumber.length < 13 || cleanNumber.length > 19) {
    return false;
  }
  
  // Luhn algorithm (mod 10)
  let sum = 0;
  let shouldDouble = false;
  
  // Loop through values starting from the rightmost digit
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber.charAt(i));
    
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  
  return sum % 10 === 0;
};

export const validateExpiryDate = (month: string, year: string): boolean => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Get last two digits
  const currentMonth = currentDate.getMonth() + 1; // 1-12
  
  const expMonth = parseInt(month, 10);
  const expYear = parseInt(year, 10);
  
  if (isNaN(expMonth) || isNaN(expYear)) {
    return false;
  }
  
  if (expMonth < 1 || expMonth > 12) {
    return false;
  }
  
  // Check if expired
  if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
    return false;
  }
  
  return true;
};

export const validateCVC = (cvc: string, cardType?: CardType): boolean => {
  const cleanCVC = cvc.trim();
  const isAmex = cardType?.name === "American Express";
  
  // Amex requires 4 digits, others require 3
  const requiredLength = isAmex ? 4 : 3;
  
  return cleanCVC.length === requiredLength && /^\d+$/.test(cleanCVC);
};
