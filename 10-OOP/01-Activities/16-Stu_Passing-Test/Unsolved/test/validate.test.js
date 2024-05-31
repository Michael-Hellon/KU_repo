const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.'
  describe('isPassword', () => {
    it('should return false if password is less than 8 character long', () => {
      const str = "asfd";
      const validate = new Validate();
      expect(validate.isPassword(str)).toEqual(false);
    });
    
    it('should return false if password does not contain at least one lowercase letter.', () => {
      const str = "Password";
      const validate = new Validate();
      expect(arithmetic.modulus(2, 2)).toEqual(false);
      });
  
      // This test checks to see if 3 % 2 has a remainder of 1 and returns 1.
    it('should calculate 3 % 2 and return 1 as the remainder', () => {
      const total = 1;
      const arithmetic = new Arithmetic();
      expect(arithmetic.modulus(3, 2)).toEqual(total);
      });

  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
});
