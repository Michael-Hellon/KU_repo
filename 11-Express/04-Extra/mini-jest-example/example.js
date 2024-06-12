class Test {
    constructor(number) {
        this.num = number;
    }
}

class MyOne extends Test {
    constructor() {
        super(1);
    }
}

class ASDF {
    constructor() {
  
    }
  
    setUsername(username) {
      this.username = username;
    }
  }

module.exports = { Test, MyOne, ASDF }
