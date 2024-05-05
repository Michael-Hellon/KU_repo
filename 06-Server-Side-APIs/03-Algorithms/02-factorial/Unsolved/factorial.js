// Write code to create a function that returns the factorial of `num`
//
// For example:
// 5! == 5 * 4! == 5 * 4 * 3 * 2 * 1 == 120

var factorial = function (num) {
    return oneLinerRecursiveFactorial(num);
};

function iterativeFactorial(num) {
    let result = 1;

    for (let i = num; i > 1; i--) {
        result = result * i;
    }

    return result;
}

function recursiveFactorial(num) {
    if (num < 1) return 1;
    return num * recursiveFactorial(num - 1);
}

oneLinerRecursiveFactorial = (num) => (num > 0) ? num * oneLinerRecursiveFactorial(num - 1) : 1;

