let cat = 'Tom';
window.cat                  // undefined
var mouse = 'Jerry';
window.mouse                // "Jerry" 

function demo() {
  let duck = 'Donald';
  {
    let blocked = 'blocked';
    console.log(blocked);   // blocked
  }

  console.log(cat);         // Tom
  console.log(mouse);       // Jerry
  console.log(duck);        // Donald
  console.log(blocked)      // ReferenceError 
  console.log(dog);         // ReferenceError
  console.log(another_dog); // undefined

  let dog = 'Pluto';
  var another_dog = 'Goofy';
}