//Write a program in to list and print all files and folders in current directory.
const fs = require('fs');

// Get the current directory path
const currentDirectory = './';

try {
  // Read the current directory
  fs.readdir(currentDirectory, (err, files) => {
    if (err) {
      console.error('Error reading current directory:', err);
      return;
    }

    // Loop through the files and folders and print them
    files.forEach(file => {
      console.log(file);
    });
  });
} catch (error) {
  console.error('An error occurred while reading the current directory:', error);
}
