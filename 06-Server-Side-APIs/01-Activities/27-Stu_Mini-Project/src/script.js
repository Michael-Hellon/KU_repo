// declares searchForm variable and finds the first class element labeled "search-form"
const searchForm = document.querySelector("#search-form");

// 
function handleSearchFormSubmit(event) {
    // prevents from resting the page when submit is clciked
    event.preventDefault();
    // retrieves the value entered by the user at each input (search subject, and pic, book or ???)
    // and stores them for future use
    const searchInput = document.querySelector('#search-input').value;
    const searchFormat = document.querySelector('#search-format').value;
    // logs results to the screen
    console.log(searchInput);

    // checks to ensure input is not empty
    if (!searchInput) {
        alert("please enter a search input");
        return;
    }
    // this 
    const queryString = `./search-results.html?q=${searchInput}&format=${searchFormat}`;
    location.assign(queryString);
}

// event listener for when user clicks submit
searchForm.addEventListener('submit', handleSearchFormSubmit);

// cityInput = searchInput
// removed searchFormat