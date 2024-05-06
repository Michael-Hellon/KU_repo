const repoNameEl = document.querySelector('#repo-name');
const issueContainerEl = document.querySelector('#issues-container');
const limitWarningEl = document.querySelector('#limit-warning');

const getRepoName = function () {
  // document.location.search: This retrieves the query string portion of the current URL. The query string includes everything after the question mark
  const queryString = document.location.search;
  // queryString.split('='): This splits the query string into an array of key-value pairs using the equal sign (=) as the delimiter.
  // repoName used on homepage.html 
  const repoName = queryString.split('=')[1];

  if (repoName) {
    repoNameEl.textContent = repoName;

    getRepoIssues(repoName);
  } else {
    document.location.replace('./index.html');
  }
};

const getRepoIssues = function (repo) {
  const apiUrl = `https://api.github.com/repos/${repo}/issues?direction=asc`;

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayIssues(data);

        if (response.headers.get('Link')) {
          displayWarning(repo);
        }
      });
    } else {
      document.location.replace('./index.html');
    }
  });
};

const displayIssues = function (issues) {
  if (issues.length === 0) {
    issueContainerEl.textContent = 'This repo has no open issues!';
    return;
  }
  // if no issues we loop through and build the list
  for (let issueObj of issues) {
    const issueEl = document.createElement('a');
    issueEl.classList = 'list-item flex-row justify-space-between align-center';
    // this line sets the href attribute of the issueEl element to the value of issueObj.html_url. 
    // In other words, it assigns a URL to the href attribute, which typically makes the element clickable and navigates to the specified URL when clicked.
    issueEl.setAttribute('href', issueObj.html_url);
    // if you set your target to _blank you open up a new blank tab
    issueEl.setAttribute('target', '_blank');

    const titleEl = document.createElement('span');
    titleEl.textContent = issueObj.title;
    issueEl.appendChild(titleEl);

    const typeEl = document.createElement('span');

    if (issueObj.pull_request) {
      typeEl.textContent = '(Pull request)';
    } else {
      typeEl.textContent = '(Issue)';
    }

    issueEl.appendChild(typeEl);

    issueContainerEl.appendChild(issueEl);
  }
};

const displayWarning = function (repo) {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';

  const linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', `https://github.com/${repo}/issues`);
  linkEl.setAttribute('target', '_blank');

  limitWarningEl.appendChild(linkEl);
};
// goes back to the top of the page to the getRepoName() function
getRepoName();
