// TODO: Add a comment describing what kind of function this is
// this is a constructor function called BlogPost and take in several parameters
// it also has a method call called "printMeData" that prints out a statement to the screen
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// method that take in a comment and adds it to the BlogPost array
// this adds a prototype into the object at the "comments" value of the object 
BlogPost.prototype.addComment = function(comment) {
  this.comments.push(comment);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComment('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
// this just logs the comment array (value of the prototype stored at the "comments" key.)
console.log(post.comments);

//this was added by me
console.log(post);
