function Pet(name, type, age, animalYearRatio) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.animalYearRatio = animalYearRatio;
}

Pet.prototype.animalYear = function() { 
  return this.animalYearRatio * this.age;
};

let ginger = new Pet('Ginger', 'British Shorthair', 4, 5),
    cherry = new Pet('Cherry', 'Golden Retriever', 3, 7);

console.log(ginger);
console.log(ginger.animalYear());
console.log(cherry);
console.log(cherry.animalYear());
