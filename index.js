// index.js

const cardTypes = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard: /^5[1-5][0-9]{14}$/,
  amex: /^3[47][0-9]{13}$/,
  discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  // Add more card types as needed
};

function getCardType(number) {
  for (const [card, pattern] of Object.entries(cardTypes)) {
    if (pattern.test(number)) {
      return card;
    }
  }
  return 'unknown';
}

function isValidCardNumber(number) {
  const sanitized = number.toString().replace(/\D/g, '');
  
  let sum = 0;
  let shouldDouble = false;
  
  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized.charAt(i));
    
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  
  return (sum % 10) === 0;
}

module.exports = { isValidCardNumber, getCardType };
