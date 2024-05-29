// TODO: Create a class constructor named ForumItem that takes in 'authorName' and 'createdOn'.
class ForumItem {
  constructor(authorName, createdOn) {
    this.authorName =  authorName;
    this.createdOn = createdOn;
}
}
// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, createdOn);
    this.title = title;
    this.text = text;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn) {
    super(authorName, createdOn) 
    this.text = text;
}
}

// TODO: Create a new object using the Comment class constructor.
const newPost = new BlogPost(
  'John Doe',
  'My Fourth Post',
  'Dogs, cats, and snakes are super cute!',
  '12/19/2021'
);



// TODO: Create a new object using the BlogPost class constructor.
const newComment = new Comment(
  'Jane Doe',
  '12/20/2021',
  'This post is really awesome!',
);


// TODO: Log both newly created BlogPost and Comment to the console.
console.log(newPost);
console.log(newComment);