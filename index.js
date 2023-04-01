const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a text color (keyword or hexadecimal number)",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a shape color (keyword or hexadecimal number)",
  },
];

// function to write SVG file
function writeToFile(data) { 
    fs.writeFile("logo.svg", data, function (err) {
        if (err) throw err;
        console.info("Generated logo.svg");
    } 
)};

function createShape(data) {
    if (data.shape == "circle") {
        return new shapes.Circle(data.text, data.textColor, data.shapeColor);
    } else if (data.shape == "triangle") {
        return new shapes.Triangle(data.text, data.textColor, data.shapeColor);
    } else if (data.shape == "square") {
        return new shapes.Square(data.text, data.textColor, data.shapeColor);
    }
};

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const shape = createShape(data);
        const logo = shape.generateShape();
        writeToFile(logo);
    })
}

// Function call to initialize app
init();