let age = 18;
if (age < 21) {
  console.log('You are too young to drink alcohol drinks.');
} else {
  console.log('You are allowed to drink alcohol drinks.');
}

if (age >= 21) {
  console.log('You are allowed to drink and vote.');
} else if (age >= 18) {
  console.log('You are allowed to vote.');
} else {
  console.log('You are too young to do anything.');
}

// ternary operator
let message = age >= 21 ? 'old' : 'young';
console.log(`You are too ${message}`);
