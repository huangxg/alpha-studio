function sum(...numbers) {
  let sum = 0;

  for (let n of numbers) {
    sum += n;
  }

  return sum;
}

function average(first, ...rest) {
  let sum = first;

  for(let n of rest) {
    sum += n;
  }

  return sum / (1 + rest.length)
}

console.log(sum(1, 2, 3));
console.log(average(1, 2, 3, 4));
