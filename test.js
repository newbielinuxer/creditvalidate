// test.js

const { isValidCardNumber, getCardType } = require('./index');

const testCases = [
  { number: '4111111111111111', expectedValid: true, expectedType: 'visa' },
  { number: '5500000000000004', expectedValid: true, expectedType: 'mastercard' },
  { number: '340000000000009', expectedValid: true, expectedType: 'amex' },
  { number: '6011000000000004', expectedValid: true, expectedType: 'discover' },
  { number: '1234567812345670', expectedValid: false, expectedType: 'unknown' },
];

testCases.forEach(({ number, expectedValid, expectedType }, index) => {
  const isValid = isValidCardNumber(number);
  const type = getCardType(number);
  
  console.log(`Test case #${index + 1}`);
  console.log(`Number: ${number}`);
  console.log(`Expected valid: ${expectedValid}, got: ${isValid}`);
  console.log(`Expected type: ${expectedType}, got: ${type}`);
  console.log('');
});
