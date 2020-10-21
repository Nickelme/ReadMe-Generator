const inquirer = require("inquirer");
const generater = require("./utils/generateMarkdown");
const fs = require("fs");
// array of questions for user
const questions = [{
        type: "input",
        message: "Please Enter A Title",
        name: "title"
    },
    {
        type: "input",
        message: "Please Enter a Description",
        name: "description"
    },
    {
        type: "input",
        message: "Please Enter how to install",
        name: "install"
    },
    {
        type: "input",
        message: "Please enter a usage",
        name: "usage"
    },
    {
        type: "list",
        message: "Please Select a License",
        choices: ["MIT", "GPL", "Apache"],
        name: "license"
    },
    {
        type: "input",
        message: "Please Enter your Email",
        name: "email"
    },
    {
        type: "input",
        message: "Please enter your github",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your contributing field",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please enter your Tests",
        name: "tests"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((ans) => {
        var readme = generater(ans);
        writeToFile("README", readme);
    });

}

// function call to initialize program
init();