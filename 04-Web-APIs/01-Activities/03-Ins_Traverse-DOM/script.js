console.log('Document Body: ');
console.log(document.body); // logs the <body> portion of the code

console.log('Children of Document Body: ');
console.log(document.body.children); // logs the <tags> within the <body></body>

console.log('First child of body: ');
console.log(document.body.children[0]); //<h1>Open the Console to See the Magic ✨! </h1>

console.log('First child of the ul: ');
console.log(document.body.children[1].children[0]); // <li id ="first-child-ul">Children[0]</li>

// Accessing element by id
const firstChildUl = document.getElementById('first-child-ul');
console.log(firstChildUl); // <li id="first-child-ul" style="color: green;">Children[0]</li>
 // pulls the element.style { color: green; } from the elements WEB DEV page (f12)

// Setting style of element
firstChildUl.style.color = 'green';
