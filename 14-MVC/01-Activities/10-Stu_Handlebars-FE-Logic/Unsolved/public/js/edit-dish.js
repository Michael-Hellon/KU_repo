async function editFormHandler(event) {
  event.preventDefault();
  const dish_name = document.querySelector('#dish_name').value;
  const description = document.querySelector('#description').value;
  const guest_name = document.querySelector('#guest_name').value;

  // TODO: What will the value of has_nuts be if the box in the form is checked?
  // the value will be true//

  // TODO: What do we call this kind of operator?
  // ternary operator - there are 3 parts to it 
  const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;

  // ? window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // TODO: What part of our application will handle this 'put' request?
  // controller - edits the model
  const response = await fetch(`/api/dish/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      dish_name,
      description,
      guest_name,
      has_nuts,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // TODO: What happens if the response is ok?
  // set the page to the current id: view changes: users pov, it will look like a page refresh
  if (response.ok) {
    document.location.replace(`/dish/${id}`);
  } else {
    alert('Failed to edit dish');
  }
}

document
  .querySelector('.edit-dish-form')
  .addEventListener('submit', editFormHandler);
