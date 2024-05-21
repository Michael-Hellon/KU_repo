const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
// The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
const doubledArray = originalArray.map(data => data * 2);

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
// map loops through the origArray and multiply the array by 3
// // A map loops through the originalArray and applys the operation in the lambda to each element and returns a new array from the result of that lambda.
// // In this case it will multiply each value in the array by 3 and return it back.
// // [3, 9, 6, 15, 30]

const tripledArray = originalArray.map(data => data * 3);
console.log(tripledArray);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
// loops through array and returns if number is even or odd
// // A map loops through the originalArray and applys the operation in the lambda to each element and returns a new array from the result of that lambda.
// // In this case it will check if the value is even or odd and return a string represnting that state (even or odd).
// // ["odd", "odd", "even", "odd", "even"]

const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});
console.log(oddOrEven);

// returns
// [ 2, 6, 4, 10, 20 ]
// [ 1, 3, 2, 5, 10 ]
// [ 3, 9, 6, 15, 30 ]
// [ 'odd', 'odd', 'even', 'odd', 'even' ]
