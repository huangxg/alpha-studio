let cat = {
  name: 'Ginger',
  age: 3,
  skills: ['sleeping', 'being cute'],
  introduction: () => {
    let skillStr = this.skills.join(' and ');
    return `I am ${this.name}, ${this.age} years old. I am good at ${skillStr}`;
  },
};
