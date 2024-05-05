// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
    return str.split(" ").map(element => {
        var letters = element.split("");
        letters[0] = letters[0].toUpperCase();
        return letters.join("");
    }).join(" ");
};

