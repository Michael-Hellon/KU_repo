// Initialize an empty array to store employee data
const employeeData = [];

// Define a function to collect employee information
function collectEmployeeData() {
    let i = 0; // Initialize a counter

    while (i < 5) {
        // Prompt the user for employee name and sales
        const employeeFirstName = prompt(`Enter First Name:`);
        const employeeLastName = prompt(`Enter Last Name:`);
        const employeeSalary = parseFloat(prompt(`Enter Salary:`));
        

        
        // Create an object to store employee details
        const employee = {
            firstName: employeeFirstName,
            lastName: employeeLastName,
            salary: employeeSalary,
        };

        // Add the employee data to the array
        employeeData.push(employee);

        i++; // Increment the counter
    }
    const addEmployee = confirm(`Do you want to add another employee?`);
}

// Call the function to collect employee data
collectEmployeeData();

// Display the collected data (you can customize this part)
console.log("Employee Data:");
employeeData.forEach((employee, index) => {
    console.log(`Employee ${index + 1}:`);
    console.log(`Name: ${employee.firstName}`);
    console.log(`Name: ${employee.lastName}`);
    console.log(`Sales: $${employee.salary.toFixed(2)}`);
    
    console.log("---------------------");
});


/*
// Initialize an empty array to store employee data
const employeeData = [];

// Define a function to collect employee information
function collectEmployeeData() {
    let i = 0; // Initialize a counter

    while (i < 5) {
        // Prompt the user for employee name and sales
        const employeeName = prompt("Please enter the employee's name:");
        const employeeSales = parseFloat(prompt("Please enter the employee's sales:"));

        // Calculate the bonus based on sales (you can customize this logic)
        const bonus = employeeSales * 0.1; // Assuming a 10% bonus

        // Create an object to store employee details
        const employee = {
            name: employeeName,
            sales: employeeSales,
            bonus: bonus,
        };

        // Add the employee data to the array
        employeeData.push(employee);

        i++; // Increment the counter
    }
}

// Call the function to collect employee data
collectEmployeeData();

// Display the collected data (you can customize this part)
console.log("Employee Data:");
employeeData.forEach((employee, index) => {
    console.log(`Employee ${index + 1}:`);
    console.log(`Name: ${employee.name}`);
    console.log(`Sales: $${employee.sales.toFixed(2)}`);
    console.log(`Bonus: $${employee.bonus.toFixed(2)}`);
    console.log("---------------------");
});
*/
