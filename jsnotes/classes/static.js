class Pet {
  static MOTTO = 'Zootopia forever';

  constructor(name, type, age, animalYearRatio) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.animalYearRatio = animalYearRatio;
  }

  animalYear() {
    return this.animalYearRatio * this.age;
  }

  static compare(one, another) {
    return one.animalYear() - another.animalYear();
  }
}

console.log(Pet.MOTTO);

let ginger = new Pet('Ginger', 'British Shorthair', 4, 5),
    cherry = new Pet('Cherry', 'Golden Retriever', 3, 7);

let older = Pet.compare(ginger, cherry) < 0 ? cherry : ginger;
console.log(`${older.name} is older`);
