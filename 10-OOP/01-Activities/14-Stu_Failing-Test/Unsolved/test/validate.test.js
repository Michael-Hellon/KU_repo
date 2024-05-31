// TODO: Import the Validate class.
const Validate = require('../validate');
// TODO: Describe a testing suite for checking the functionality of the Validate class.

  // TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
describe('Validate', () => {
    describe('invalid', () =>{ // describe('isPasword', () =>{
    it('it should return a flase for empty password', () => {
        const str = '';
        const validate = new Validate();
        expect(validate.isPassword(str)).toEqual(false)
    })
  })
})




