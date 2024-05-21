// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// using the spread operator, to create a copy of the songs array.
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got']
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // it reduces the array down to one value, the initial value is 0, in this case it adds the numbers
  //   // The `reduce` method executes the reducer fn on each element of the array. in this case previous + current values.
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
// 6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// a rest parameter, used to represent a indefinite number of arguments 
const additionSpread = (...array) => array.reduce((a, b) => a + b, 0);

// TODO: What do you expect to be logged in the console?
// 6 
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// 110
console.log(additionSpread(1, 2, 3, 4, 100));
