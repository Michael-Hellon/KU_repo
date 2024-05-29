// Constructor can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
// function Animal(name, age, breed) {
function FnAnimal(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log('Zzzzzzzzz');
  };
}

// Dog constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
// function Dog(name, age, breed, puppies) {
//   // .call is the function that allows you pass attributes in
//   Animal.call(this, name, age, breed);
function FnDog(name, age, breed, puppies) {
  FnAnimal.call(this, name, age, breed);
  // new data we are creating 
  this.puppies = puppies;
}

// Dog.prototype.bark = function () {
FnDog.prototype.bark = function () {

  console.log('Woof!');
};

// // Cat constructor can use the Animal constructor's call method to inherit properties "name", "age", "breed", and the "nap()" function
// function Cat(name, age, breed, kittens) {
//   Animal.call(this, name, age, breed);
//   this.kittens = kittens;
// }

class Animal {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  nap() {
    console.log('Zzzzzzzzz');
  };
}

// Cat.prototype.meow = function () {
//   console.log('Meow!');
// };
class Dog extends Animal {
  constructor(name, age, breed, puppies) {
    super(name, age, breed);
    this.puppies = puppies;
  }

  bark() {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  constructor(name, age, breed, kittens) {
    super(name, age, breed);
    this.kittens = kittens;
  }

  meow() {
    console.log('Meow!');
  }
}

const dog = new Dog('Rex', 2, 'Bulldog', ['Baxter', 'Marley', 'Scooby']);
const cat = new Cat('Tom', 2, 'Shorthair', ['Garfield', 'Felix', 'Salem']);

dog.bark();
cat.meow();
dog.nap();
cat.nap();
