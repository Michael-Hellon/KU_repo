const requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// Send n API request using the AJAX call from jQuerry
// the ajax function takes in a settings object that has the endpoint
// it then returns an object which is handled by the "then" function
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// fetch takes in an endpoint URL that return a promise. (the promise then used by the .then function)
// the first .then function takes in another function which
// processes the promise and converts the response into a JSON object
// (wrapped inside another promise) 
// the 2nd .then to process the promise and then it takes the data and we print it to the console.
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// create a new XMLHttpRequest and store it in the variable xhr
// then we set thr onreadyready to a function so that it finishes we can run the function set to it.
// inside the function we haVE THE xmlHTTPrEQUEST 'S  READY STAt. 
// the open call sets the xhr object prop relating to the http and endpoint url
// initiaiate the request
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned

// xhr returns a string the others return a JSOn object

