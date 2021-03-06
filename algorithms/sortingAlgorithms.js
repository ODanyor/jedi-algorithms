// included <measurePerfomance> from perfomance.js;

function moduleSorting () {
  console.log("<<<=== Sorting algorithms ===>>>");

  function defaultSort (array) {
    return array.sort((a, b) => a - b);
  } // O(n)
  // measurePerfomance(() => defaultSort(generateNumbers(100)));

  function bubbleSort (array) {
    const sortedArray = array.slice();

    for (let outer = 0; outer < sortedArray.length; outer++) {
      let outerElement = sortedArray[outer];

      for (let inner = outer + 1; inner < sortedArray.length; inner++) {
        let innerElement = sortedArray[inner];

        if (outerElement > innerElement) {
          sortedArray[outer] = innerElement;
          sortedArray[inner] = outerElement;

          outerElement = sortedArray[outer];
          innerElement = sortedArray[inner];
        }
      }
    }

    return sortedArray;
  }
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  // measurePerfomance(() => bubbleSort(generateNumbers(100)));

  function quickSort (array) {
    const copiedArray = array.slice();

    if (copiedArray.length <= 1) return copiedArray;

    const pElement = copiedArray.shift(); // pivot element
    const boxA = []; // box for items smaller than pElement
    const boxB = [pElement]; // box for items equal to pElement
    const boxC = []; // box for items bigger than pElement

    while (copiedArray.length) {
      const cElement = copiedArray.shift(); // current element

      if (pElement === cElement) boxB.push(cElement);
      else if (pElement > cElement) boxA.push(cElement);
      else boxC.push(cElement);
    }

    const sortedBoxA = quickSort(boxA);
    const sortedBoxC = quickSort(boxC);

    return sortedBoxA.concat(sortedBoxB, sortedBoxC);
  }
  // Time Complexity: O(n * log n)
  // Space Complexity: O(n)
  // measurePerfomance(() => quickSort(generateNumbers(100)));

  function mergeSort (array) {
    if (array.length === 1) return array;

    if (array.length === 2) return array[0] > array[1] ? [array[1], array[0]] : array;

    const m = Math.floor(array.length / 2); // middle index
    const lSortedArray = mergeSort(array.slice(0, m)); // left sorted array
    const rSortedArray = mergeSort(array.slice(m)); // right sorted array

    const mArray = []; // merged array
    let lIndex = 0; // left index
    let rIndex = 0; // right index

    while (
        lIndex < lSortedArray.length ||
        rIndex < rSortedArray.length
      ) {
      if (
          lIndex >= lSortedArray.length ||
          lSortedArray[lIndex] > rSortedArray[rIndex]
        ) {
        mArray.push(rSortedArray[rIndex]);
        rIndex++;
      } else {
        mArray.push(lSortedArray[lIndex]);
        lIndex++;
      }
    }

    return mArray;
  }
  // Time Complexity: O(n * log n)
  // Space Complexity: O(n)
  // measurePerfomance(() => mergeSort(generateNumbers(100)));
}

export default moduleSorting;
