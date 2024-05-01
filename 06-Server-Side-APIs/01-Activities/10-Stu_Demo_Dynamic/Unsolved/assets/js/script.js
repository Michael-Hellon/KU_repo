const userContainer = document.getElementById('users');
const fetchButton = document.getElementById('fetch-button');

function getApi() {
  const requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (element of data) {
        const userName = document.createElement('h3');
        const userUrl = document.createElement('p');
        userName.textContent = element.login;
        userUrl.textContent = element.html_url;
        userContainer.append(userName);
        userContainer.append(userUrl);
      }
    });
}
fetchButton.addEventListener('click', getApi);
