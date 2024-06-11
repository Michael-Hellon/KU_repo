const { MyOne } = require("./example.js");

describe("Test", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("MyOne", () => {
    it("should create a MyOne class and return 1", () => {
      const one = new MyOne();
      expect(one.num).toEqual(1);
    });
  });
});
