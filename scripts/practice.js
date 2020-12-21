function main () {
  console.log("<<<=== Practice Time ===>>>");

  const items = ["2", "1", "2"];
  function permutation(array) { // ["2", "1", "2"]
    const permutations = [];

    if (array.length === 1) return Array(array);

    const partialPermutations = permutation(array.slice(1));
    const fisrtOption = Array(array[0]);

    for (let i = 0; i < partialPermutations.length; i++) {
      const partialPermutation = partialPermutations[i];

      for (let j = 0; j <= partialPermutations.length; j++) {
        const permutationA = partialPermutation.slice(0, j);
        const permutationB = partialPermutation.slice(j);

        permutations.push(permutationA.concat(fisrtOption, permutationB));
      }
    }

    return permutations;
  }
  measurePerfomance(() => permutation(items));
}

window.addEventListener("load", main);
