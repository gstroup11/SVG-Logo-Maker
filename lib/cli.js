const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");

//constructor class for the question prompts and writing to file.
class CLI {
    run() {
        return inquirer 
          .prompt([
            {
                name:  "text",
                type: "input",
                message: "Please enter the text for your logo, can not be more than three characters.",
                validate: (text) => 
                    text.length <= 3 ||
                    "Must be three or less characters! ^c and restart the node.",
            },
            {
                name: "textColor",
                type: "input",
                message: "PLease enter your text color.",
            },
            {
                name: "shape",
                type: "list",
                message: "Select a shape from the list below.",
                choices: ["circle", "square", "triangle"],
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Please enter your shapes' color.",
            },
          ])
    }
}

module.exports = CLI;