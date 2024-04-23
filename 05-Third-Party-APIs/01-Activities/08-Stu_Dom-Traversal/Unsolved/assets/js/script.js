// Assemble: Create/select DOM elements
const rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.

rootEl.children('ul').children('li').css('background', 'white');

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning

// declares rowThree as children of "ul" that equals 2;
const rowThree = rootEl.children('ul').eq(2);

// selects rowThree children that equals to (0) and sets text to "O"
rowThree.children().eq(0).text('O');

// .text is a Jqurry function that sets text value

// set .text  is .text('0');

// get .text is .text()