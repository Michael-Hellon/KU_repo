const resultText = document.querySelector('#result-text');
const resultContainer = document.querySelector('#result-container');
const searchForm = document.querySelector("#search-form");

function getParams() {
    const searchParams = document.location.search.split('&');

    const query = searchParams[0].split('=').pop();  // cityLat
    const format = searchParams[1].split('=').pop(); // cityLon

    searchApi(query, format); // (cityLat, cityLon)
}

function searchApi(query, format) {
    if (!format) {
        format = "search";
    }

    const searchQuery = `https://www.loc.gov/${format}/?fo=json&q=${query}`;

    console.log(searchQuery);

    fetch(searchQuery)
        .then(function (response) {
            if (!response.ok) {
                alert(response.status + " " + response.statusText);
                return;
            }

            return response.json();
        }).then(function (searchResult) {

            console.log(searchResult);

            resultText.textContent = query;

            if (!searchResult.results.length) {
                console.log('No results found!');
                resultContainer.innerHTML = String.raw`<h3>No results found, search again!</h3>`;
            } else {
                resultText.textContent = "";
                for (const result of searchResult.results) {
                    printResults(result);
                }
            }
        }).catch(function (error) {
            console.error(error);
            alert(error);
        })
}

function printResults(result) {
    console.log(result);

    resultContainer.innerHTML += String.raw`
<div class="card bg-light text-dark mb-3 p-3">
    <div class="card-body">
        <h3 class="card-title">${result.title}</h3>
        <p>
            <strong>Date: </strong>${result.date}<br/>
            <strong>Subjects: </strong>${result.subject ? result.subject.join(', ') : "No subject for this entry."}<br/>
            <strong>Description: </strong>${result.description ? result.description[0] : "No description for this entry."}<br/>
        </p>
        <a href=${result.url} class="btn btn-dark">Read More</a>
    </div>
</div>`;
}

function handleSearchFormSubmit(event) {
    event.preventDefault();

    const searchInput = document.querySelector('#search-input').value;
    const searchFormat = document.querySelector('#search-format').value;

    console.log(searchInput);

    if (!searchInput) {
        alert("please enter a search input");
        return;
    }

    const queryString = `./search-results.html?q=${searchInput}&format=${searchFormat}`;
    location.assign(queryString);

    getParams();
}

searchForm.addEventListener('submit', handleSearchFormSubmit);

getParams();


