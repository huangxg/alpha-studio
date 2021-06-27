let cat = { name: 'Ginger' },
    pet = {};

for (p in cat) {
  pet[p] = cat[p];
}

console.log(cat == pet)
console.log(cat === pet)
    
pet.name = 'Candy';
console.log(cat);
