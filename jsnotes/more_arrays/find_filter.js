let students = ['Anna', 'Bella', 'Cinderella', 'Dora'];
// find 1st long name
students.find(name => name.length > 4);
// all long names
students.filter(name => name.length > 4);
// all short names
students.filter(name => name.length <= 4);
