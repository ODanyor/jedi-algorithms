function measurePerfomance(callback, times=1000) {
  let total = 0;

  for (let i = 0; i < times; i++) {
    const startTime = performance.now();
    callback();
    const endTime = performance.now();

    total += endTime - startTime;
  }

  console.log({
    perfomance: total / times,
    result: callback(),
  });
}

function generateNumbers(length) {
  const randomNumbers = [];

  for (let i = 0; i < length; i++) {
    randomNumbers.push(Math.floor(Math.random() * 1000));
  }

  return randomNumbers;
}
