// import measurePerfomance from "./perfomance.js";
// import generateNumbers from "./perfomance.js";
// import generateSequenceNumbers from "./perfomance.js";

function moduleSorting () {
  // console.log("<<<=== Sorting algorithms ===>>>");

  function defaultSort (array) {
    return array.sort((a, b) => a - b);
  } // O(n)
  // measurePerfomance(() => defaultSort(generateNumbers(100)));

  function bubbleSort (array) {
    const resultArray = array.slice();

    for (let outer = 0; outer < resultArray.length; outer++) {
      let outerElement = resultArray[outer];

      for (let inner = outer + 1; inner < resultArray.length; inner++) {
        let innerElement = resultArray[inner];

        if (outerElement > innerElement) {
          resultArray[outer] = innerElement;
          resultArray[inner] = outerElement;

          outerElement = resultArray[outer];
          innerElement = resultArray[inner];
        }
      }
    }

    return resultArray;
  } // O(n^2)
  // measurePerfomance(() => bubbleSort(generateNumbers(100)));

  function quickSort (array) {
    const copiedArray = array.slice();

    if (copiedArray.length <= 1) return copiedArray;

    const smallArray = [];
    const bigArray = [];
    const pivotElement = copiedArray.shift();
    const centerArray = [pivotElement];

    while (copiedArray.length) {
      const currentElement = copiedArray.shift();

      if (pivotElement == currentElement) centerArray.push(currentElement);
      else if (currentElement < pivotElement) smallArray.push(currentElement);
      else bigArray.push(currentElement);
    }

    const sortedSmalls = quickSort(smallArray);
    const sortedBigs = quickSort(bigArray);

    return sortedSmalls.concat(centerArray, sortedBigs);
  } // O(n * log n) <= The Master Theorem
  // measurePerfomance(() => quickSort(generateNumbers(100)));

  function mergeSort (array) {
    if (array.length < 2) return array;

    if (array.length == 2) return array[0] > array[1] ? [array[1], array[0]] : array;

    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    const leftSortedArray = mergeSort(leftArray);
    const rightSortedArray = mergeSort(rightArray);

    const mergedArray = [];
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;

    while (
        leftArrayIndex < leftSortedArray.length ||
        rightArrayIndex < rightSortedArray.length
      ) {
      if (
          leftArrayIndex >= leftSortedArray.length ||
          leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]
        ) {
        mergedArray.push(rightSortedArray[rightArrayIndex]);
        rightArrayIndex++;
      } else {
        mergedArray.push(leftSortedArray[leftArrayIndex]);
        leftArrayIndex++;
      }
    }

    return mergedArray;
  }
  // measurePerfomance(() => mergeSort(generateNumbers(100)));
}

window.addEventListener("load", moduleSorting);
