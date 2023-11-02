// Write a program to Find the smallest and second smallest element in an
// array

function findSmallestAndSecondSmallest(arr) {
  try {
    if (arr.length < 2) {
      return "Array should have at least two elements.";
    }

    let smallest = Number.MAX_VALUE;
    let secondSmallest = Number.MAX_VALUE;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }

    if (secondSmallest === Number.MAX_VALUE) {
      return "No second smallest element found.";
    }

    return {
      smallest,
      secondSmallest,
    };
  } catch (error) {
    console.error("An error occurred while finding the smallest and second smallest elements:", error);
    return {
      smallest: null,
      secondSmallest: null,
    };
  }
}

const arr = [12, 4, 9, 5, 7, 3, 8];
const result = findSmallestAndSecondSmallest(arr);

if (result.smallest !== null && result.secondSmallest !== null) {
  console.log("Smallest Element: " + result.smallest);
  console.log("Second Smallest Element: " + result.secondSmallest);
}
