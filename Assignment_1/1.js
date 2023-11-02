// Write a Program to Count Words Lines and Total Size of a text file. Store the
// counted words, total size in a new file.

const fs = require("fs");

// Function to count words and lines
function countWordsLines(text) {
  try {
    const words = text.split(/\s+/).filter((word) => word !== "");
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    return {
      wordCount: words.length,
      lineCount: lines.length,
      totalSize: text.length,
    };
  } catch (error) {
    console.error("Error counting words and lines:", error);
    return {
      wordCount: 0,
      lineCount: 0,
      totalSize: 0,
    };
  }
}

// Read the input text file
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the input file:", err);
    return;
  }

  try {
    // Count words, lines, and total size
    const countResult = countWordsLines(data);

    // Write the results to a new file
    const resultText = `Word Count: ${countResult.wordCount}\nLine Count: ${countResult.lineCount}\nTotal Size: ${countResult.totalSize} bytes`;
    fs.writeFile("output.txt", resultText, "utf8", (err) => {
      if (err) {
        console.error("Error writing the output file:", err);
        return;
      }
      console.log("Counted values saved in output.txt");
    });
  } catch (error) {
    console.error("An error occurred while processing the data:", error);
  }
});
