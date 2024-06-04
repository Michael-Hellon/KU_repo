const http = require('http');

// TODO: What does this function return?
// Returns a promise that allows the user to handle the htps request asynch.
// it also allows them to handle an error or success statement
const asyncRequest = (url) => // this is a manual representation of a fetch request
  new Promise((resolve, reject) => {
    let error;
    let rawData = '';

    // Use the http.get method to send an asynchronous request to an api at the given url.
    http
      .get(url, (res) => {
        // Check for an error code (not equal to 200)
        if (res.statusCode !== 200) {
          // Creates an error object representing the failed http request
          error = new Error(`Request Failed.\nStatus Code: ${res.statusCode}`);
          res.resume();
          return;
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        });
      })
      .on('error', (e) => {
        reject(e);
      })
      .on('close', () => {
        // The 'close' event fires after the incoming message is completely received. Error will be undefined if the
        // response status code was 200.
        if (error) {
          // TODO: What the following line do?
          // this will pass the error value to reject callback which allows us to return a failed value from the promise (return failed)
          reject(error);
        } else {
          // TODO: What does the following line do?
          // this will pass the success value to resolve callback which allows us to return a successful value from the promise (return successful)

          resolve(rawData);
        }
      });
  });

asyncRequest('http://numbersapi.com/random/trivia')
  // TODO: When is the callback function passed to .then() called by the promise?
  // callback is passed to the .then and logs the data from the request to console when the resolve is called
  .then((data) => console.log(data))
  // callback is passed to the .then and logs the error from the request to console when the reject is called
  .catch((error) => console.log(error));
