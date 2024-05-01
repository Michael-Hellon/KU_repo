fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
//It's done when I make a `fetch()` request, and the `cache` option is set to `reload`.
  cache: 'reload', // https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
