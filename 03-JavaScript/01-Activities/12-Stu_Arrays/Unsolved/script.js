// WRITE YOUR CODE HERE
const studentNames = ["ronnie", "bobby", "ricky", "mike"];

console.log(`There are ${studentNames.length} students in class`);

for(var i = 0; i < studentNames.length; i++) {
    console.log(`Welcome to the class, ${studentNames[i]}`)
}

if(studentNames[0] === "ronnie") {
    console.log(`${studentNames[0]} is in class"`)
}


for(const student of studentNames) {
    console.log(`my students are ${student}`);
}