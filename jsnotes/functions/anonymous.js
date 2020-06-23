let numbers = [1, 2, 3, 4],
    squares = [];

numbers.forEach(n => squares.push(n * n));

numbers.forEach(function(n) {
  return squares.push(n * n);
});
