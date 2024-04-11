// WRITE YOUR CODE BELOW
const students = ["ronnie", "bobby", "ricky", "mike", "frank"];

console.log(`There are ${students.length} students in class`);

for(var i = 0; i < students.length; i++) {
    console.log(`Great to see you, ${students[i]}!`)
}

for(const name of students){
    console.log(`Its Really Great to see you, ${name}!  `);
}