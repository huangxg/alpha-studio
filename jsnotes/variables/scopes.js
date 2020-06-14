let cat = 'Tom';
window.cat                  // undefined
var mouse = 'Jerry';
window.mouse                // "Jerry" 

function demo() {
  let duck = 'Donald';
  {
    let blocked = 'blocked';
    blocked;   // blocked
  }

  cat;         // Tom
  mouse;       // Jerry
  duck;        // Donald
  blocked      // ReferenceError 
  dog;         // ReferenceError
  another_dog; // undefined

  let dog = 'Pluto';
  var another_dog = 'Goofy';
}
