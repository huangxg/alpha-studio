let students = ['Anna', 'Bella', 'Cinderella', 'Dora'];

// Search Bella
for (let i = 0; i < students.length; i++) {
  console.log(`Try ${i + 1}`);
  if (students[i] == "Bella") {
    console.log("Found Bella");
    break;
  }
}

// Collect names with four or fewer letters
let shortNames = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].length > 4) {
    continue;
  }
  shortNames.push(students[i]);
}

shortNames;
