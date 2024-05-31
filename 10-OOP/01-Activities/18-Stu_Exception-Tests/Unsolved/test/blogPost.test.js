const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  describe('Author Name', () => {
    it('should return false if authorName is less than 2 character long', () => {
      const cb = () => new BlogPost('A');
      const err = new Error('blah blah blah')
      expect(cb).toThrow(err)});
    
    });
    
    describe('Author Characters', () => {
      it('should return false if authorName blah blah blah', () => {
        const cb = () => new BlogPost('johndoe!');
        const err = new Error('blah blah blah')
        expect(cb).toThrow(err)});
      });
  
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
});
