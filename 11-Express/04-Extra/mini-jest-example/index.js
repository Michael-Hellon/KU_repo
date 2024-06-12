const { ASDF } = require("./example.js");
const inquirer = require('inquirer');

const asdf = new ASDF();  

const question = async () => {
  const res = await inquirer // assume you type in "qwer"
  .prompt({
    type: 'input',
    name: 'username',
    message: 'Enter a Github Username:',
  });

  asdf.setUsername(res.username);
  console.assert(asdf.username === "qwer");
}
question();

