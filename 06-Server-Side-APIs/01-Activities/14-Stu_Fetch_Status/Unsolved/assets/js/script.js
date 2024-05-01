const badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';
const responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status); // or console.log(response)
      // Then write the conditional based on that response.status value
      // Make sure to display the response on the page
      if (response.status !== 200) { // or  if (response.status !== 200 || !resposne.ok) {
        responseText.textContent = response.status;
      }
      return response.json;
    })
    .then(function (data) {
      console.log(data);
      // or
      responseText.textContent 
    });
}

getApi(badRequestUrl);

// learn more https://developer.mozilla.org/en-US/docs/Web/API/Response