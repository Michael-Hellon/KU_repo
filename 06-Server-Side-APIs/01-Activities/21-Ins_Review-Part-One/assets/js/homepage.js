// jQuery selectors
const userFormEl = document.querySelector('#user-form');
const languageButtonsEl = document.querySelector('#language-buttons');
const nameInputEl = document.querySelector('#username');
const repoContainerEl = document.querySelector('#repos-container');
const repoSearchTerm = document.querySelector('#repo-search-term');

// form handling function
const formSubmitHandler = function (event) {
  event.preventDefault();

  // trimming the input of the username to get rid of whitespace at the end of the input
  // aka sanitizing our value
  const username = nameInputEl.value.trim();
  
  // checks that the user name is truthy  (i.e., not empty, null, or undefined)
  if (username) {
    // this pulls the repos for the username inputed
    getUserRepos(username);
    // sets the text content of an element (probably related to repositories) to an empty string
    repoContainerEl.textContent = '';
    // this line clears the value of an input field where the user enters the GitHub username
    nameInputEl.value = '';
    
  } else {
    // If the username is falsy (empty, null, or undefined)
    alert('Please enter a GitHub username');
  }
};

// button click handler
const buttonClickHandler = function (event) {
  // it is referencing a DOM element that represents the programming language to search for.
  const language = event.target.getAttribute('data-language');
  // If there is no language selected, it wont fetch the repos and will clear the search term.
  if (language) {
    getFeaturedRepos(language);

    repoContainerEl.textContent = '';
  }
};

const getUserRepos = function (user) {
  // creates a template string for the apiURL by interpolating the user value into the URL
  // specifically fetches the data from GItHub API for the specific user's repos
  const apiUrl = `https://api.github.com/users/${user}/repos`;

  // initiates an asynchronous HTTP request to the apiUrl
  // fetches resources from the url and returns a promise
  fetch(apiUrl)
    // specifies what to do when a response is received
    .then(function (response) {
      // checks if the HTTP status code of the response is in the 200-299 range, 
      // if true than proceeds to parse the response body as JSON
      // if false, 404 error
      if (response.ok) {
        // if ok, the data (parsed JSON) is passed to the displayRepos(data, user) function
        response.json().then(function (data) {
          displayRepos(data, user);
        });
      } else {
        alert(`Error:${response.statusText}`);
      }
    })
    // If there’s a network error
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });
};

const getFeaturedRepos = function (language) {
  // Searching for repos that are in the selected language, is featured and then sort by help wanted issues.
  const apiUrl = `https://api.github.com/search/repositories?q=${language}+is:featured&sort=help-wanted-issues`;

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayRepos(data.items, language);
      });
    } else {
      alert(`Error:${response.statusText}`);
    }
  });
};

// this is our render function
const displayRepos = function (repos, searchTerm) {
  // checks to ensure there are repos for the user
  if (repos.length === 0) {
    repoContainerEl.textContent = 'No repositories found.';
    return;
  }
  // returns the text content (repos) of your selector and assigns the value of searchTerms to it
  repoSearchTerm.textContent = searchTerm;

  // loops through the list of repos for the username submitted and then builds the list of repos
  for (let repoObj of repos) {
    // repo owners login name and then the name of the repo.
    const repoName = `${repoObj.owner.login}/${repoObj.name}`;

    // for each repo creates a div element with a (bootstrap class element) and assigns the given properties
    const repoEl = document.createElement('div');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';

    // creates a span with the repos name
    const titleEl = document.createElement('span');
    titleEl.textContent = repoName;

    // appends titleEl to repoEl
    repoEl.appendChild(titleEl);

    // creates a span with the the assigned properties
    const statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    // displays a red X and number of open issues if there are any
    if (repoObj.open_issues_count > 0) {
      statusEl.innerHTML =
        `<i class='fas fa-times status-icon icon-danger'></i>${repoObj.open_issues_count} issue(s)`;
    } else {
      statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    // appends statusEl to repoEL
    repoEl.appendChild(statusEl);
    // appends repoEl to repoContainerEl
    repoContainerEl.appendChild(repoEl);
  }
};

// event listeners for the El
userFormEl.addEventListener('submit', formSubmitHandler);
languageButtonsEl.addEventListener('click', buttonClickHandler);

// *************************************************
/*
const nameInputEl = document.querySelector('#username'); 
    changed to: 
    const cityInputEl = document.querySelector("#cityName");


*/