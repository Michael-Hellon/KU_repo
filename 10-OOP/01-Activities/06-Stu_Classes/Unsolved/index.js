// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
// TODO: Give BlogPost a property called 'comments' that is set to an empty array.
class BlogPost {
  constructor(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = this.createdOn;
    this.comments = [];
        }

  // TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.  
  printMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn}.`);
  }

  addComment(comment) {
    this.comments.push(comment);
  } 
}

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', and 'createdOn'.       
class Comment{
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn
    }
// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) with (text)'.

  printMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn} with ${this.text}.`);
  }
}

const newComment = new Comment('Jane Doe', 'This post is cool', '12/12/1903');
const newPost = new BlogPost('John Doe', 'My nth post', 'Lorium ipsum dolor...', '12/12/2093');

newPost.addComment(newComment);

newPost.printMetaData();
newComment.printMetaData();



// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.

// TODO: Create a new object using the Comment class constructor.

// TODO: Create a new object using the BlogPost class constructor.

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
