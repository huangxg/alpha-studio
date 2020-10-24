let cat = {
  name: 'Ginger',
  age: 3,
  skills: ['sleeping', 'being cute'],
  introduction: () => {
    return "I'm Ginger, nice to meet you.";
  },
};

for (p in cat) {
  console.log(`name: ${p}, type: ${typeof cat[p]}, value: ${cat[p]}`);
}

Object.keys(cat).forEach(k => {
  console.log(`name: ${k}, type: ${typeof cat[k]}, value: ${cat[k]}`);
});

for (k of Object.keys(cat)) {
  console.log(`name: ${k}, type: ${typeof cat[k]}, value: ${cat[k]}`);
}
