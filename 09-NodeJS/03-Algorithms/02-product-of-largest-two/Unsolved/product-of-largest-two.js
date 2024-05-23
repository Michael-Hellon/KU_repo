// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    return fastHackyWay(arr);
};
// // finds the largest two numbers
// function pol2(arr) {
//     let largest = null;
//     let secondLargest = null;

//     for (let i = 0; i < arr.length; i++) {
//         var current = arr[i];

//         if (current > largest || largest == null) {
//             secondLargest = largest;
//             largest = current;
//         } else if (current > secondLargest || secondLargest == null) {
//             secondLargest = current;
//         }
//     }
    
//     return largest * secondLargest;
// }


// Another way to solve the code
function fastHackyWay(arr) {
    let a = arr.sort((a, b) => a - b);
    return a.pop() * a.pop();
}
