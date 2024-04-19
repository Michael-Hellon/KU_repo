let count = 0;
const incrementEl = document.querySelector('#increment');
const decrementEl = document.querySelector('#decrement');
const countEl = document.querySelector('#count');

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function()
{ count++; setCounterText() });
// TODO: Add event listener to decrement button
decrementEl.addEventListener("click", function(){ 
  // stops counting at down when it reaching 0. will not turn negative
  if (count >0 ){
  count--; 
  setCounterText()
  }
});