const inquirer = require("inquirer");
const fs = require("fs");
const createLog = require("./lib/generateSvg");
const { Console } = require("console");
const questions = [
  {
    type: "input",
    message: "What text for logo?",
    name: "text",
  },
  {
    type: "input",
    message: "COlor to fill the shape",
    name: "ShapeColor",
  },
  {
    type: "input",
    message: "Enter text color?",
    name: "textColor",
  },

  {
    type: "input",
    message: "Select a Shape for logo?",
    name: "shape",
    type: "list",
    choices: ["Circle", "Ellipse", "Trinagle", "Rectangle"],
  },
];

function createLogo(fileName, data) {
  let newShape = data.shape;
  let newLogo = new createLog.Trinagle(
    data.text,
    data.ShapeColor,
    data.textColor,
    data.shape
  );
  newlogoCreated = newLogo.render();
  console.log(newlogoCreated);

  fs.writeFile(fileName, newlogoCreated, (err, res) => {
    if (err) {
      console.log("error", err);
    }
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((dataHere) => createLogo("./dist/logo.svg", dataHere));
}
init();
