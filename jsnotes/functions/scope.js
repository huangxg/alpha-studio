function sum(n) {
  let s = 0;
  for (let i = 0; i <= n; i++) {
    s += i;
  }
  return s;
}

sum(10);
s; // ReferenceError
