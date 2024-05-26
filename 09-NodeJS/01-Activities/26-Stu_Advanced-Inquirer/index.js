const inquirer = require('inquirer');
const colors = require('colors');
const fs = require("fs");

inquirer
  .prompt(
    [
    { type: "input",
    message: colors.brightMagenta("What is your name?"),
    name: "username",
    },
    { type: "list",
    message: colors.brightMagenta("What languages do you know?"),
    name: "languages",
    choices: [
      "English",
      "Spanish",
    ]
    },
    { type: "list",
    message:  colors.brightMagenta("What is your preferred method of communication?"),
    name: "contact",
    choices: [
      "email",
      "text",
    ]

    }
  ])
  .then((response) => {
    const filename = `${data.name.toLowerCase().split(' ').join(' ')}.json`;
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => err ? console.log(colors.bgBrightRed(err)) : console.log(colors.bgBrightGreen(response)));
  })