// import measurePerfomance from './perfomance.js';

function moduleSearch () {
  // console.log("<<<=== Searching algorithms ===>>>");

  const numbers = [1, 4, -1, 5, 31, 324, 7, 2, 83, -53];
  function defaultSearch (element, array) {
    return array.find(item => item == element);
  } // O(n)
  // measurePerfomance(() => defaultSearch(31, numbers));

  function linearSearch (element, array) {
    for (const index in array) {
      if (array[index] === element) return index;
    }
  } // O(n)
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
  } // O(log n)
  // measurePerfomance(() => sortedNumbers(-2, sortedNumbers), 0);
  function binarySearch2 (element, sortedArray, offset) {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    const middleIndex = Math.floor((sortedArray.length - 1) / 2);

    if (sortedArray[middleIndex] == element) return middleIndex + offset;

    if (sortedArray[middleIndex] < element) {
      startIndex = middleIndex + 1;
      offset += middleIndex + 1;
    } else endIndex = middleIndex - 1;

    return binarySearch2(element, sortedArray.slice(startIndex, endIndex + 1), offset);
  } // The Master Theorem (43)
  // measurePerfomance(() => binarySearch2(-13, sortedNumbers, 0), 0);
}

window.addEventListener("load", moduleSearch);
