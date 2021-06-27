let cat = { name: 'Ginger' },
    pet = cat;

console.log(cat == pet)
console.log(cat === pet)
    
pet.name = 'Candy';
console.log(cat);

console.log(cat == pet)
console.log(cat === pet)
