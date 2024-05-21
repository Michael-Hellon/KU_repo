const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition. 
const evenNumbers = originalArray.filter(data => {
  // The anonymous function uses a conditional to check if a number is divisible by 2. 
  if (data % 2 === 0) {
    // If a number is even (divisible by 2), the condition returns true.
    return true;
  }
});

console.log(evenNumbers);
console.log(originalArray);

const isPrime = num => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
};


// TODO: Describe how filter is working in this example. What will the value of primeArray be? 
// filter loops through the originalArray and returns only the prime numbers to a new array called primeArray. leaves the originalArray untouched
// // Filter will loop through the original array and apply isPrime to it. It will construct a new array that includes all prime numbers.
// //[3, 2, 5]

const primeArray = originalArray.filter(isPrime);
console.log(primeArray); // should be [3,2,5]

// TODO: Describe how filter is working in this example. What will the value of moreThan5Array be? 
// filter loops through the originalArray and returns only the greater than 5 to a new array called moreThan5Array. leaves the originalArray untouched
// // filter will loop through the original array and apply the lambda num > 5 to it. this will construct a new array of all number greater than 5.
// // [10]

const moreThan5Array = originalArray.filter(num => num > 5);
console.log(moreThan5Array);  // [10]

