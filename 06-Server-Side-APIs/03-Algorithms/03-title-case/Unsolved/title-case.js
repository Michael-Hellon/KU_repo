// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
    // str.Split(" ") split the string(sentence) into separate words turning the string into an array
    // .map(element => { })  this iterates over each element in the array, arrow function defines what to do with each element
    return str.split(" ").map(element => {
        // splits each word into an array of letters
        var letters = element.split("");
        // this capitalizes the first letter in each word
        letters[0] = letters[0].toUpperCase();
        // combines the letters back into word
        return letters.join("");
    // combines the word back into a sentence (string)
    }).join(" ");
};



