let chars = new Map([
  [97, 'a'],
  [98, 'b'],
  [99, 'C']
]);

for (let c of chars) {
  console.log(c);
}

for (let k of chars.keys()) {
  console.log(k);
}

for (let v of chars.values()) {
  console.log(v);
}
