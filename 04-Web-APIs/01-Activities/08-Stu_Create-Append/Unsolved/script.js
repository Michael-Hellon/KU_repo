const body = document.body;
const h1El = document.createElement('h1');
const infoEl = document.createElement('div');
const imgEl = document.createElement('img');
const kittenEl = document.createElement('div');
const nameEl = document.createElement('div');
const favoriteEl = document.createElement('div');
// Create ordered list element
const listEl = document.createElement('ol');
// Create ordered list items
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

h1El.textContent = 'Welcome to my page';
kittenEl.textContent = 'This is my kitten 🐱.';
nameEl.textContent = 'His name is Jax.';
favoriteEl.textContent = 'My favorite foods are:';

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list
favoriteEl.appendChild(listEl);

h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', 'http://placekitten.com/200/300');
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');
favoriteEl.setAttribute('style', 'font-size:20px;');

// TODO: Add ordered list items containing four favorite foods

const itemStyle = "color:white; padding:5px; margin-left:35px;"

listEl.setAttribute("style", "background:#333333: padding: 20px;");
li1.textContent = "Apples 🍎 ";
li1.style = "background:#666666;" + itemStyle;
listEl.appendChild(li1);

li2.textContent = "Pizza 🍕 ";
li2.style = "background:#777777;".concat(itemStyle);
listEl.appendChild(li2);

li3.textContent = "Dumplings 🥟 ";
li3.style = "background:#888888;".concat(itemStyle);
listEl.appendChild(li3);

li4.textContent = "Cupcakes 🧁 ";
li4.style = "background:#999999;".concat(itemStyle);
listEl.appendChild(li4);

