// 1st do while
let i = 1,
    sum = 0;
do {
  sum += i;
  i++;
} while (i <= 10)
console.log(`i: ${i}, sum: ${sum}`);

// 2nd do while
i = 10;
sum = 0;
do {
  sum += i;
  i--;
} while (i > 0)
console.log(`i: ${i}, sum: ${sum}`);
