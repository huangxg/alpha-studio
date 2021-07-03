function divide(p, q) {
  if (typeof p != 'number' || typeof q != 'number' || q == 0) {
    console.log('Are you kidding?');
    return;
  }

  return p / q;
}

console.log(divide('hello', 'world'));
console.log(divide(1, 0));
