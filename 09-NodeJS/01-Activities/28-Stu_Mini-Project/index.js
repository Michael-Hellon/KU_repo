const inquirer = require('inquirer');
const colors = require('colors');
const fs = require("fs");

inquirer
  .prompt(
    [
    { type: "input",
    message: "What is your name?",
    name: "name",
    },
    { type: "input",
    message: "What is your location?",
    name: "location",
    },
    { type: "input",
    message:  "Tell me a little about yourself.",
    name: "bio",
    },
    { type: "input",
    message: "What is your Linkedin URL?",
    name: "linked",
    },
    { type: "input",
    message: "What is your GitHUb URL?",
    name: "github",
    },

  ])
  .then((data) => {
    // const filename = `${data.name.toLowerCase().split(' ').join(' ')}.json`;
    const html = generateHtml(data);
    fs.writeFile("index.html", html, (err) => 
      err ? console.log(colors.bgBrightRed(err)) : console.log(colors.bgBrightGreen("sucsess!"))
    );
  });

  function generateHtml ({ name, location, bio, linked,github}) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
       
          
        
    </body>
    </html>`
  }
