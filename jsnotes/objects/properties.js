let cat = {
  name: 'Ginger',
  age: 3,
  skills: ['sleeping', 'being cute'],
  introduction: () => {
    return "I'm Ginger, nice to meet you.";
  },
};

Object.keys(cat).forEach(k => {
  console.log(`name: ${k}, type: ${typeof cat[k]}, value: ${cat[k]}`);
});
