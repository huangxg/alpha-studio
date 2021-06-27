let cat = { name: 'Ginger' },
    pet = Object.assign({}, cat);

console.log(cat == pet)
console.log(cat === pet)
    
pet.name = 'Candy';
console.log(cat);

Object.assign(pet, { pet: cat });
console.log(pet);
