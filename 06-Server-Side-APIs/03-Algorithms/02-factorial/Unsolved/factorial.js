// Write code to create a function that returns the factorial of `num`
var factorial = function(num) {
    return iterativeFactorial(num); 

function iterativeFactorial(num) {
    let result = 1;

    for (let i = num; i > 1; i--){
        result = result * i;
    }
}
    return results
}

function recursiveFactorial(num) {
    if (num <1) return 1;
    return num * recursiveFactorial(num-1);
}

onLinerRecursiveFactorial = (num) => (num >0) ? 