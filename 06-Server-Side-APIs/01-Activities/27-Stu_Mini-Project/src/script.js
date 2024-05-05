const searchForm = document.querySelector("#search-form");

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
}

searchForm.addEventListener('submit', handleSearchFormSubmit);

