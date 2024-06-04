const Validate = require("../validate.js");

describe("Validate", () => {
  describe("isPassword", () => {
    // Write a test that checks if isPassword() returns false when the password is less than 8 characters.
    it("should return false when the password is less than 8 characters", () => {
      const str = 'asdf';
      const validate = new Validate();
      expect(validate.isPassword(str)).toEqual(false);
    });

    // Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
    it("should return false when the password does not contain at least 1 uppercase.", () => {
      const str = 'password12345';
      const validate = new Validate();
      expect(validate.isPassword(str)).toEqual(false);
    });

    // Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
    it("should return false when the password does not contain at least 1 lowercase.", () => {
      const str = 'PASSWORD12345';
      const validate = new Validate();
      expect(validate.isPassword(str)).toEqual(false);
    });

    // Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
    it("should return false when the password does not contain at least 1 number.", () => {
      const str = 'PASSWORDasdf';
      const validate = new Validate();
      expect(validate.isPassword(str)).toEqual(false);
    });

    // Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
    it("should return true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.", () => {
      const str = 'Password123';
      const validate = new Validate();
      expect(validate.isPassword(str)).toEqual(true);
    });
  });
});
