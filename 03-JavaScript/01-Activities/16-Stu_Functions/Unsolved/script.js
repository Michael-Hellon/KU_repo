// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Logs "They are equal in type and value"
isEqual(10, 10);

// Refer to sample functions as needed!

// TODO: Call the isEqual function so that it logs "They are equal in value"
isEqual(45,45)

// TODO: Rewrite isEqual as a function expression called 'isEqualTakeTwo`
function isEqualToTwo(x, y) { // look at recording for possible arrow function 
  if (x === 2 && y === 2) {
    console.log('They are equal in type and value to 2');
  } else if (x == 2 && y == 2) {
    console.log('They are equal in value to 2');
  } else {
    console.log('They are not equal to 2');
  }
  return;
}

// TODO: Call the isEqualTakeTwo function so that it logs "They are not equal"
isEqualToTwo(4,2)