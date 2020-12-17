function main () {
  console.log("<<<=== Practice Time ===>>>");

  const numbers = [19, 12, 5, 2, 0, -1, -5, -14];

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
  } // O(n)
  // measurePerfomance(() => bubbleSort(numbers));

  function quickSort (array) {
    const copiedArray = array.slice();

    if (copiedArray.length <= 1) return copiedArray;

    const pElement = copiedArray.shift(); // pivot element
    const boxA = []; // box for items smaller than pElement
    const boxB = [pElement];
    const boxC = []; // box for items bigger than pElement

    while (copiedArray.length) {
      const cElement = copiedArray.shift(); // current element

      if (pElement === cElement) boxB.push(cElement);
      else if (pElement > cElement) boxA.push(cElement);
      else boxC.push(cElement);
    }

    const sortedBoxA = quickSort(boxA);
    const sortedBoxB = quickSort(boxB);
    const sortedBoxC = quickSort(boxC);

    return sortedBoxA.concat(sortedBoxB, sortedBoxC);
  } // The Master Theorem
  // measurePerfomance(() => quickSort(numbers));

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
  measurePerfomance(() => mergeSort(numbers));
}

window.addEventListener("load", main);
