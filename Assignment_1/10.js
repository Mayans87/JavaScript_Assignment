// Write a program to sort the characters of a string alphabetically.
function sortStringAlphabetically(inputString) {
  // Convert the input string to an array of characters, sort it, and then join it back to a string.
  return inputString.split("").sort().join("");
}

const inputString = "openai";
const sortedString = sortStringAlphabetically(inputString);

console.log("Original String: " + inputString);
console.log("Sorted String: " + sortedString);
