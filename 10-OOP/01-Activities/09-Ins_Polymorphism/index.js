class Animal {
  constructor(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  }
  nap() {
    console.log('Zzzzzzzzz');
  };
  getLives() {
    return 1;
  };
}

class Dog extends Animal {
  constructor(name, age, breed, puppies) {
   super(name, age, breed);
    this.puppies = puppies;
  }

  bark () {
    console.log('Woof!');
  };
}

class Cat extends Animal {
  constructor(name, age, breed, kittens) {
    super(name, age, breed);
    this.kittens = kittens;
    }
  // 'getLives()' method is overriden to provide Cat with a different functionality
  getLives() {
    // return 9;
    return super.getLives() + 8
  };

  meow() {
    console.log('Meow!');
  };
}

const dog = new Dog('Rex', 2, 'Bulldog', ['Baxter', 'Marley', 'Scooby']);
const cat = new Cat('Tom', 2, 'Shorthair', ['Garfield', 'Felix', 'Salem']);

console.log(dog.getLives());
console.log(cat.getLives());
