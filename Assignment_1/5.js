//Write a program in that receives a string and a character as input and
// capitalizes all the given character from the given string.

function capitalizeCharacterInString(inputString, characterToCapitalize) {
  try {
    const charToCapitalize = characterToCapitalize.toLowerCase();
    const charToReplace = characterToCapitalize.toUpperCase();

    const modifiedString = inputString.split('').map(char => {
      if (char.toLowerCase() === charToCapitalize) {
        return charToReplace;
      } else {
        return char;
      }
    }).join('');

    return modifiedString;
  } catch (error) {
    console.error("An error occurred while capitalizing the character:", error);
    return inputString; // Return the original string as a fallback value
  }
}

const inputString = "This is a test sentence with some t's.";
const characterToCapitalize = 't';

const result = capitalizeCharacterInString(inputString, characterToCapitalize);

console.log("Original String: " + inputString);
console.log("Modified String: " + result);
