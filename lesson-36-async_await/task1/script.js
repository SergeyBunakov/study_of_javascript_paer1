'use strict';
console.log('--- JavaScript. async/await. Task-1 ---');
console.log('              ---------');

/*
async function func() {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(17)
    }, 1000);
  })
  const result = await promise;
  console.log(result);
  console.log('Hello');
  return 1;
}

const result = func();
console.log("Hi!");
*/

/*
const getUser = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  console.log(response);
}
getUser('facebook');
*/

/*
const getUser = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);
  if (!response.ok) {
    return null;
  }
  const userData = await  response.json();
  // console.log(userData);
  return userData;
}
getUser('facebook');
*/

const getUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    // console.log(err);
    throw new Error('Failed to fetch user!');
  }
};

getUser('facebook')
    .then(userData => console.log(userData))
    .catch(err => alert(err.message));
