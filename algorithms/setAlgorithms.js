// included <measurePerfomance> from perfomance.js;

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

  // Version: without repetition
  function getPermutations (options) {
    const permutations = [];

    if (options.length === 1) return Array(options);

    const partialPermutations = getPermutations(options.slice(1));

    const firstOption = options[0];

    for (let i = 0; i < partialPermutations.length; i++) {
      const partialPermutation = partialPermutations[i];

      for (let j = 0; j <= partialPermutation.length; j++) {
        const permutationA = partialPermutation.slice(0, j);
        const permutationB = partialPermutation.slice(j);

        permutations.push(permutationA.concat([firstOption], permutationB));
      }
    }

    return permutations;
  }
  // Time Complexity: O(n!)
  // measurePerfomance(() => getPermutations(todo));

  // Version: with repetition
  function getPermutations2 (options, length) {
    const permutations = [];

    if (length === 1) return options.map(option => [option]);

    const partialPermutations = getPermutations2(options, length - 1);

    for (const option of options) {
      for (const existingPermuation of partialPermutations) {
        permutations.push([option].concat(existingPermuation));
      }
    }

    return permutations;
  }
  // Time Complexity: O(n^r) => n = number options; r = length
  // measurePerfomance(() => getPermutations2(todo, 3));
}

export default moduleSet;
