//Write a program to separate even and odd numbers of an array of integers.
// Put all even numbers first, and then odd numbers. Also remove the duplicate
// elements in it

function separateEvenOddAndRemoveDuplicates(arr) {
    const evenSet = new Set();
    const oddSet = new Set();
    const resultArray = [];
  
    for (let number of arr) {
      if (number % 2 === 0) {
        evenSet.add(number);
      } else {
        oddSet.add(number);
      }
    }
  
    for (let number of arr) {
      if (evenSet.has(number)) {
        resultArray.push(number);
        evenSet.delete(number);
      }
    }
  
    for (let number of arr) {
      if (oddSet.has(number)) {
        resultArray.push(number);
        oddSet.delete(number);
      }
    }
  
    return resultArray;
  }
  
  const inputArray = [1, 2, 3, 4, 2, 5, 6, 7, 8, 6];
  const resultArray = separateEvenOddAndRemoveDuplicates(inputArray);
  
  console.log('Original Array: ' + inputArray);
  console.log('Modified Array: ' + resultArray);
  