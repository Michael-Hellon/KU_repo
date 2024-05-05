// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome



var isPalindrome = function (str) {
    return builtInFunctional(str);
};

function builtInFunctional(str) {
    let reversedString = str.split("").reverse().join("");
    return (reversedString === str);
}

function iterativeIsPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

