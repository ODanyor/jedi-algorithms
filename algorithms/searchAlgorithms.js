// import measurePerfomance from './perfomance.js';

function moduleSearch () {
  // console.log("<<<=== Searching algorithms ===>>>");

  const numbers = [1, 4, -1, 5, 31, 324, 7, 2, 83, -53];
  function defaultSearch (element, array) {
    return array.find(item => item == element);
  }
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  // measurePerfomance(() => defaultSearch(31, numbers));

  function linearSearch (element, array) {
    for (const index in array) {
      if (array[index] === element) return index;
    }
  }
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  // measurePerfomance(() => linearSearch(5, numbers));

  const sortedNumbers = [-13, -2, 0, 1, 4, 6, 7, 10, 17];
  function binarySearch (element, sortedArray) {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    while (startIndex <= endIndex) {
      const middleIndex = Math.floor((endIndex + startIndex) / 2);

      if (element == sortedArray[middleIndex]) return middleIndex;

      if (sortedArray[middleIndex] < element) startIndex = middleIndex + 1;
      else endIndex = middleIndex - 1;
    }
  }
  // Time Complexity: O(log n)
  // Space Complexity: O(1)
  // measurePerfomance(() => sortedNumbers(-2, sortedNumbers), 0);
  function binarySearch2 (element, sortedArray, offset) {
    // O(1)
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    const middleIndex = Math.floor((sortedArray.length - 1) / 2);

    if (sortedArray[middleIndex] == element) return middleIndex + offset;

    if (sortedArray[middleIndex] < element) {
      startIndex = middleIndex + 1;
      offset += middleIndex + 1;
    } else endIndex = middleIndex - 1;

    // O(1)
    return binarySearch2(element, sortedArray.slice(startIndex, endIndex + 1), offset);
  } // O(n^logb a * log n) => O(1 * log n) = O(log n)
  // measurePerfomance(() => binarySearch2(-13, sortedNumbers, 0), 0);
}

window.addEventListener("load", moduleSearch);
