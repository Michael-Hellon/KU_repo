const todoInput = document.querySelector('#todo-text');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoCountSpan = document.querySelector('#todo-count');

const todos = [];

// We are creating a todo list by appending a 'li' item to the parent todo list element
function renderTodos() {
  // We are clearing the todo list of all child elements and setting the number of todo items in tht todoCount element
  todoList.innerHTML = '';
  todoCountSpan.textContent = todos.length;

  // creating the todo list
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement('li');
    li.textContent = todo;
    li.setAttribute('data-index', i);

    const button = document.createElement('button');
    button.textContent = 'Complete ✔️';

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// the function is called on page load and handles forst time  loading and rendering of whatever is in local storage.
function init() {
  // 3 operations. 1st getting the todo object out of localstorage.
  //specifically we are using the todo key to get the jsaon string out of localstorage,
  //then parsing it to a JS object using parse and finally storing it in variable "storedTodos"
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  // Null check to make sure we are not setting the todo list to null
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // this renders the todo array into elements on the DOM
  renderTodos();
}

function storeTodos() {
  // takes the todo array and converts it to a JSON string and stores it in LocalStorage
  localStorage.setItem('todos', JSON.stringify(todos));
}
// listens for this event and then saves data to todo list.
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const todoText = todoInput.value.trim(); 
  // checks to make sure its not a empty entry, if so it breaks
  if (todoText === '') {
    return;
  }
  // pushes the todo text to the todo array and clears the todoInput
  todos.push(todoText);
  todoInput.value = '';

  // stores the new array and then renders the new value(s)
  storeTodos();
  renderTodos();
});

// add a new element to the Todo list
todoList.addEventListener('click', function (event) {
  const element = event.target;
  // checks the new element is a button
  if (element.matches('button') === true) {
    const index = element.parentElement.getAttribute('data-index');
    todos.splice(index, 1);
    // again stores the new array and then renders the new values
    storeTodos();
    renderTodos();
  }
});

init();
