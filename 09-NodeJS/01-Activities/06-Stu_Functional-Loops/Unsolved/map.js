const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
// The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
const doubledArray = originalArray.map(data => data * 2);

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
// map loops through the origArray and multiply the array by 3
const tripledArray = originalArray.map(data => data * 3);
console.log(tripledArray);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
// loops through array and returns if number is even or odd
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



// in node
> console.log(add(1,2,3,4,5));
Uncaught ReferenceError: add is not defined
> // returns 3
undefined
> const addRest = ( ...nums) => {
...   let sum = 0;
...   for (let num of nums) sum += num;
...   return sum;
... }
undefined
>
> console.log(addRest(1,2,3,4,5));
15
undefined
> addRest(1)
1
> let dragons = {'drogon', 'Viserion', 'Rhaegal
let dragons = {'drogon', 'Viserion', 'Rhaegal
               ^^^^^^^^

Uncaught SyntaxError: Unexpected string
> .exit