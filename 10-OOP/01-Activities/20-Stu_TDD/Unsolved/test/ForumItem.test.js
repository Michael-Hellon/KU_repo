const ForumItem = require('../lib/ForumItem.js');

describe('ForumItem', () => {
  // Add a comment describing this test.

  describe('Instantiate', () => {
    it('should be an instance of ForumItem class', () => {
      const forumitem = new ForumItem();

      expect(forumitem).toBeInstanceOf(ForumItem);
    });
  });

  // check that author will be assigned
  describe('Initialize authorName', () => {
    it('should set authorName properly', () => {
      const authorName = 'Jack Doe';
      const forumitem = new ForumItem(authorName);

      expect(forumitem.authorName).toBe(authorName);
    });
  });

  // check that text will be assigned.
  describe('Initialize text', () => {
    it('should set text properly', () => {
      const text = 'This is some random text';
      const forumitem = new ForumItem('Jack Doe', text);

      expect(forumitem.text).toBe(text);
    });
  });

  // check that createdOn will be assigned
  describe('Initialize createdOn', () => {
    it('should set createdOn properly', () => {
      const createdOn = '12/15/2021';
      const forumitem = new ForumItem(
        'Jack Doe',
        'This is some random text',
        createdOn
      );

      expect(forumitem.createdOn).toBe(createdOn);
    });
  });

  // check that printmeta will be assigned.
  describe('printMetaData() method', () => {
    it('should print message with data', () => {
      const forumitem = new ForumItem(
        'Jack Doe',
        'This is some random text',
        '12/15/2021'
      );

      expect(forumitem.printMetaData()).toBe(
        `Created by Jack Doe on 12/15/2021`
      );
    });
  });
});
