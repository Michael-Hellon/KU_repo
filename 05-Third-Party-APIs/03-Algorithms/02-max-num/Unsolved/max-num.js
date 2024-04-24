// Write code to return the largest number in the given array

var maxNum = function(arr) {
    let num = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > num) {
            num = arr[i];
            console.log('num: ', num);
            console.log('arr[i]:', arr[i])
        } 
        }
        return num;
    }
/* Other ways it will work

var maxNum = function(arr) { 
    return typicalAnswer(arr);

function typicalAnswer(arr) {
    let largest = 0;
    for (const iterator of arr) {
        if (iterator > largest) {
            largest = iterator;
        }    
    }
    return largest;
}

function funAnswer(arr) {
    return arr.toSorted((a,b) => a-b).pop()
}

*/