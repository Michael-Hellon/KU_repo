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

module.exports = { Test, MyOne }
