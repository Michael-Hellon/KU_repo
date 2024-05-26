const inquirer = require('inquirer');
const colors = require('colors');
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Where are you from?",
      name: "location",
    },
    {
      type: "input",
      message: "What is your main hobby?",
      name: "hobby",
    },
    {
      type: "input",
      message: "What is your favorite food?",
      name: "food",
    },
    {
      type: "input",
      message: "What is you github username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your linkedin url?",
      name: "linkedin",
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "langs",
      choices: [
        "Fortran",
        "COBOL",
        "C",
        "Forth",
        "MySQL",
        "Pascal",
        "ML",
        "Ada",
        "Objective-C",
        "Eiffel",
        "Tcl",
        "Haskell",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Perl",
        "Go",
        "Rust",
        "Emacs Lisp",
        "Python",
        "R",
        "OCaml",
        "var'aq",
        "D",
        "Julia",
        "Elixir",
        "Kotlin",
        "Elm",
        "Wren",
        "Swift",
        "Zig",
        "Raku",
        "Crystal",
        "Myrddin",
        "Odin",
        "Ballerina",
        "V",
        "Mojo",
        "Webassembly",
        "C++",
        "C#",
        "T-SQL",
        "Oracle SQL",
        "PicoLisp",
        "Racket Scheme",
        "Postgres SQL",
        "SQLite",
        "Java",
        "Visual Basic",
        "Lua",
        "ARM Assembly",
        "6502 Assembly",
        "MIPS Assembly",
      ],
    },
  ])
  .then((data) => {
    const html = generateHtml(data);

    fs.writeFile("index.html", html, (err) =>
      err ? console.log(colors.bgBrightRed(err)) : console.log(colors.bgBrightGreen("success!"))
    );
  });

  function generateHtml({name, location, hobby, food, github, linkedin, langs,}) {
    
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.10.4/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>
        <title>About Me</title>
      </head>
      <body>
        <header class="hero min-h-screen bg-base-200">
          <div class="hero-content">
            <div class="prose max-w-md">
              <div class="text-center">
                <h1>Hello there</h1>
                <h2 class="display-4">Hi! My name is ${name}</h2>
                <p class="lead">I am from ${location}.</p>
                <p>My favorite food is ${food}</p>
                <p>My main hobby is ${hobby}</p>
              </div>
              <p>I know the following programming languages:</p>
              <ul>
                ${langs
                  .map((lang) => {
                    return "<li>" + lang + "</li>";
                  })
                  .join("\n              ")}
              </ul>
              <div class="text-center">
                <h1><span class="badge bg-primary">Contact Me</span></h1>
                <p>My GitHub username is ${github}</p>
                <p>LinkedIn: ${linkedin}</p>
              </div>
            </div>
          </div>
        </header>
      </body>
    </html>
    `;
  }
  