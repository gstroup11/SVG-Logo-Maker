const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require("fs/promises");
const { generateSvgText } = require("./svg");

// Constructor class for the question prompts and writing to file.
class CLI {
    async run() {
      try {
        // Prompt the user for input using Inquirer
        const answers = await inquirer.prompt([
          {
            name: "text",
            type: "input",
            message: "Please enter the text for your logo, can not be more than three characters.",
            validate: (text) => text.length <= 3 || "Must be three or fewer characters! ^c and restart the node.",
          },
          {
            name: "textColor",
            type: "input",
            message: "Please enter your text color.",
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
            message: "Please enter your shape's color.",
          },
        ]);
  
        // Destructure the answers object
        const { text, textColor, shape, shapeColor } = answers;

        let shapeInstance;
  
        // Created an instance of the selected shape class based on user input
        switch (shape) {
          case "circle":
            shapeInstance = new Circle(shapeColor);
            break;
          case "square":
            shapeInstance = new Square(shapeColor);
            break;
          case "triangle":
            shapeInstance = new Triangle(shapeColor);
            break;
          default:
            throw new Error("Invalid shape selected.");
        }
  
        // Generate the SVG text using the user input
        const svgText = generateSvgText(text, textColor);

        // Render the SVG content using the shape instance and SVG text
        const svgContent = shapeInstance.render(svgText);

        const filename = "logo.svg";
  
        // Write the SVG content to logo.svg
        await writeFile(filename, svgContent);
  
        console.log(`Generated "${filename}"!`);
        console.log(`Open the "${filename}" file to view the SVG.`);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  }
module.exports = CLI;