//Find total Number of bits required to represent a number in binary.

function countBitsRequired(number) {
  try {
    // Using a bitwise operation to find the highest set bit position
    let bitsRequired = 0;
    while (number > 0) {
      bitsRequired++;
      number >>= 1; // Right shift to check the next bit
    }
    return bitsRequired;
  } catch (error) {
    console.error("An error occurred while counting bits required:", error);
    return 0; // Return 0 as a fallback value
  }
}

const number = 42; // Replace with your desired number
const bitsRequired = countBitsRequired(number);

console.log(`Number ${number} requires ${bitsRequired} bits in binary representation.`);
