fetch('https://api.github.com/gists/public?since=2021-06-01&per_page=100')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  // ? marks end of the path everything after that are parameters (since=2021-06-01)
  // kinda like key:value pairs