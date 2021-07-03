function divide(p, q) {
  if (isNaN(p) || isNaN(q) || q == 0) {
    throw 'Are you kidding?';
    return;
  }

  return p / q;
}

console.log(divide('1', '8'));
console.log(divide(1, 0));
