'use strict';
console.log('--- Async/Await in JavaScript. Task-3. ---');
console.log('              ---------');

console.log("Async/await");
/*

const main = () => {
  console.log('Hi');
  setTimeout(function cb() {
    console.log('there');
  }, 0);
  console.log('JSConfEU');
};

main();
*/

const main = () => {
  console.log('1');
  setTimeout(() => console.log('2'), 0);
  console.log('3');
  setTimeout(() => console.log('4'), 1000);
  console.log('5');
}

main();
console.log('6');

