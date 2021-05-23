'use strict';
console.log('--- Async/Await in JavaScript. Task-2. ---');
console.log('              ---------');

console.log("Async/await");

export const printing = () => {
  console.log(1);
  setTimeout(function() { console.log(5); }, 1000);
  console.log(2);
  setTimeout(function() { console.log(4); }, 0);
  console.log(3);
};


