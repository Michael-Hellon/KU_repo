const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the
//  form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

function handleFormSubmit(event) {
    event.preventDefault();

    const shoppingItem = $('input[name="shopping-input"]').val('');

    if (!shoppingItem) {
        console.warn("no shopping item in form!");
        return;
    }

    shoppingListEl.append('<li>${shoppingItem}</li>');

    $('input[name="shopping-input"]').val('');
}

shoppingFormEl.on('submit', handleFormSubmit);
