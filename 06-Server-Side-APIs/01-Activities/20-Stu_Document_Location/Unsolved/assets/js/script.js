const badRequestUrl = 'https://api.github.com/unicorns';
const redirectUrl = './404.html';

// * It's done when I make a `fetch()` request that results in a 404 status, and the browser redirects to `404.html`.

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
  if (response.status === 404) {
    document.location.replace(redirectUrl);
  }

});
