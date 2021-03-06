// included <measurePerfomance> from perfomance.js;

function moduleMath () {
  console.log("<<<=== Math algorithms ===>>>");

  function isPowerOfTwo (number) {
    return !Boolean(number & number - 1);
  } // O(1)
  // measurePerfomance(() => isPowerOfTwo(64), 1);

  function factorialLoop (number) {
    let result = 1;

    for (let i = 2; i <= number; i++) result *= i;

    return result;
  }
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  // measurePerfomance(() => factorialLoop(3));

  function factorialRecursion (number) { 
    if (number > 0) {
      if (number == 1) return number; // 1
      return number * factorialRecursion(number - 1); // n
    } else if (number == 0) return 1;
  }
  // Time Complexity: O(n)
  // Space Complexity: O(n)
  // measurePerfomance(() => factorialRecursion(0), 0);

  function fibonacciSequenceOf (number) {
    if (number == 0 || number == 1) return 1;
    return fibonacciSequenceOf(number - 1) + fibonacciSequenceOf(number - 2);
  } // O(2^n)
  function fibSequence_updated (number, memo) {
    if (memo[number]) return memo[number];

    if (number == 0 || number == 1) memo[number] = 1;
    else memo[number] = fibSequence_updated(number - 1, memo) + fibSequence_updated(number - 2, memo);

    return memo[number];
  } // O(n)
  // measurePerfomance(() => fibSequence_updated(15, {}));
}

export default moduleMath;
