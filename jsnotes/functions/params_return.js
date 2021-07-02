function add(n1, n2) {
  return n1 + n2;
}
console.log(add(512, 512));

function divide(p, q = 1) {
  return p / q;
}
console.log(divide(9, 3));
console.log(divide(9));
