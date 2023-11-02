// Write a Program to interchange first and last digit of a number.

function interchangeFirstAndLastDigit(number) {
  try {
    const numStr = number.toString();

    if (numStr.length < 2) {
      // The number should have at least two digits for interchange to make sense
      return number;
    }

    const firstDigit = numStr[0];
    const lastDigit = numStr[numStr.length - 1];

    // Replace the first and last digit in the number string
    const newNumStr = lastDigit + numStr.slice(1, numStr.length - 1) + firstDigit;

    return parseInt(newNumStr, 10);
  } catch (error) {
    console.error("An error occurred while interchanging the first and last digits:", error);
    return number;
  }
}

const number = 12345; // Replace with your desired number
const result = interchangeFirstAndLastDigit(number);

console.log("Original Number: " + number);
console.log("Number with Interchanged Digits: " + result);
