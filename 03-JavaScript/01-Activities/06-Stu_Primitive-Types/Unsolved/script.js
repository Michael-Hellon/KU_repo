const one = 64;
const two = "656302";
const three = false;
const four = null;
let five = 64.55;
let six = "Howdy!";
let seven;

// Insert comments to explain what each console log below will log to the console
console.log(typeof one);  // Number, cannot be changed, immutable
console.log(typeof two); // String, cannot be changed, immutable
console.log(typeof three); // Boolean, cannot be changed, immutable
console.log(typeof four); // object, cannot be changed, immutable
console.log(typeof five); // Number - floating point, can be changed
console.log(typeof six); // String, can be changed
console.log(typeof seven); // undefined, can be changed

five = "Hello!";
six = false;
seven = 23;

// Insert comments to explain what each console log below will log to the console
console.log(typeof five); // String
console.log(typeof six); // Boolean
console.log(typeof seven); // Number

