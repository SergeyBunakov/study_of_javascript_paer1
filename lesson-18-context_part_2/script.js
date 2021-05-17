'use strict';
console.log('--- Execution context is not an easy topic. Part-2. ---');
console.log('---------');
console.log('--- event (this in arrow funcyion) ---');

const obj = {
  name: 'Henry',
  sayHi() {
    console.log(this.name);
  },
};

//obj.sayHi();

const func = obj.sayHi;

//func();

console.log(this);
