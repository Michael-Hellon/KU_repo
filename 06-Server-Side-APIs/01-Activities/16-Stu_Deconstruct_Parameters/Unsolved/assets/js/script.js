fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/is7sues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

/* 
per_page=10
  limits the results to 10 elements per page

state=open
  Only shows issues that are in the "open" state

sort=create 
  this will sort the returned data by date

direction=desc
  this will display the data in descending order

*/