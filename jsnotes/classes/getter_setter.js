class Pet {
  constructor(name, type, age, animalYearRatio) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.animalYearRatio = animalYearRatio;
  }

  get animalYear() {
    return this.animalYearRatio * this.age;
  }

  set birthday(value) {
    this.age = value;
    console.log(`Happy birthday, ${this.name}`);
  }
}

let ginger = new Pet('Ginger', 'British Shorthair', 4, 5);    
console.log(ginger);
console.log(ginger.animalYear);
ginger.birthday = 5;
console.log(ginger.age);
