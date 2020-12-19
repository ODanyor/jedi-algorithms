// import measurePerfomance from "./perfomance.js";
// import generateNumbers from "./perfomance.js";
// import generateSequenceNumbers from "./perfomance.js";

function moduleSet () {
  console.log("<<<=== Set algorithms ===>>>");

  const colors = ["blue", "red"];
  const sizes = ["m", "l"];

  function cartesian (set1, set2) {
    const products = [];

    for (let element of set1) {
      for (const element2 of set2) {
        if (!Array.isArray(element)) element = [element];

        products.push([...element, element2]);
      }
    }

    return products;
  }
  // Time Complexity: O(n^2)
  // Space Complexity: O(n^2)
  // measurePerfomance(() => cartesian(colors, sizes));

  const brands2 = ["nike", "vans"];
  const sizes2 = [40, 41, 42, 43, 44];
  const colors2 = ["red", "blue", "green"];

  function cartesian2 (...sets) {
    let tempSet = sets[0];

    for (let i = 1; i < sets.length; i++) tempSet = cartesian(tempSet, sets[i]);

    return tempSet;
  }
  // Time Complexity: O(n^x)
  // Space Complexity: O(1)
  // measurePerfomance(() => cartesian2(brands2, sizes2, colors2));

  const todo = ["1","2","3"];

  function getPermutations (array) {
    const permutations = [];

    if (array.length === 1) return Array(array);

    const partialPermutations = getPermutations(array.slice(1)); // [["3"]]

    const firstOption = array[0]; // "2"

    for (let i = 0; i < partialPermutations.length; i++) {
      const partialPermutation = partialPermutations[i]; // ["3"]

      for (let j = 0; j <= partialPermutation.length; j++) {
        const permutationA = partialPermutation.slice(0, j);
        const permutationB = partialPermutation.slice(j);

        permutations.push(permutationA.concat([firstOption], permutationB));
      }
    }

    return permutations;
  }
  measurePerfomance(() => getPermutations(todo), 0);
}

window.addEventListener("load", moduleSet);
