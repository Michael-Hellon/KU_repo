// WRITE YOUR CODE BELOW
const customerDrink = {
    name: "Coffee",
    sugars: 3,
    isReady: true,
};

console.log(customerDrink)



// if(customerDrink.isReady === true) {
//     console.log('Ready for pick-up');
// } else {
//     console.log('Still in order queue');
// };

// or

if (customerDrink.isReady === true) {
    console.log(`Ready for pick-up: ${customerDrink.name} with ${customerDrink.sugars} sugars.`);
} else {
    console.log(`Still in order queue: ${customerDrink.name} with ${customerDrink.sugars} sugars.`);
}