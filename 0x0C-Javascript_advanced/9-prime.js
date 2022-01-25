#!/usr/bin/node

function countPrimeNumbers() {
  let numbersPrimeArray = [];
  for (let i = 2; i <= 100; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if ( i > 1 && flag == 0) {
      numbersPrimeArray.push(i);
    }
  }
  return numbersPrimeArray.length;
}
const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
