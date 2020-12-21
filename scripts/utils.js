function measurePerfomance(callback, count=1000) {
  let total = 0;

  for (let i = 0; i < count; i++) {
    const sTime = performance.now();
    callback();
    const eTime = performance.now();

    total += eTime - sTime;
  }

  console.log({
    perfomance: total / count,
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
