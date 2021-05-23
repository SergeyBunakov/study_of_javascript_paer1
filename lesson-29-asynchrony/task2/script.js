'use strict';
console.log('--- Async/Await in JavaScript. Task-2. ---');
console.log('              ---------');

console.log("Async/await");

export const pinger = (count, period) => {
  console.log('Ping');

  const interval = setInterval(() => {
    console.log('Ping');
  }, period);

  setTimeout(() => clearInterval(interval), (count - 1) * period);
};


