class Pet {
  #age;

  constructor(name, type, age, animalYearRatio) {
    this.name = name;
    this.type = type;
    this.#age = age;
    this.animalYearRatio = animalYearRatio;
  }

  get age() {
    return this.animalYearRatio * this.#age;
  }

  #happyBirthday() {
    console.log(`Happy birthday, ${this.name}`);
  }

  set birthday(value) {
    this.#age = value;
    this.#happyBirthday();
  }
}

let ginger = new Pet('Ginger', 'British Shorthair', 4, 5);    
console.log(ginger.age);
ginger.birthday = 5;
console.log(ginger.age);
