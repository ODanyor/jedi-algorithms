function main () {
  console.log("<<<=== Practice Time ===>>>");

  const numbers = [19, 12, 5, 2, 0, -1, -5, -14];
  // TASK: sort numbers via Bubble Sort
  function bubbleSort (array) {
    const resultArray = array.slice();

    for (let outer = 0; outer < array.length; outer++) {
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
  }
  // measurePerfomance(() => bubbleSort(numbers))

  function bubbleSort2 (array) {
    const sortedArray = [...array];

    for (let outer = 0; outer < array.length; outer++) {
      for (let inner = outer + 1; inner < array.length; inner++) {
        if (array[outer] > array[inner]) {
          let outerElement = array[outer];
          array[outer] = array[inner];
          array[inner] = outerElement;
        }
      }
    }

    return sortedArray;
  }
    measurePerfomance(() => bubbleSort2(numbers), 0);
}

window.addEventListener("load", main);
