class Pet {
  constructor(name, type, age, animalYearRatio) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.animalYearRatio = animalYearRatio;
  }

  animalYear() {
    return this.animalYearRatio * this.age;
  }
}

class Cat extends Pet {
  constructor(name, type, age) {
    super(name, type, age, 5);
  }
}

class Dog extends Pet {
  constructor(name, type, age) {
    super(name, type, age, 7);
  }
}

let ginger = new Cat('Ginger', 'British Shorthair', 4),
    cherry = new Dog('Cherry', 'Golden Retriever', 3);

console.log(ginger);
console.log(cherry);
