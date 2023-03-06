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
    choices: ["circle", "ellipse", "polygon", "rect"],
  },
];

function createLogo(fileName, data) {
  let newShape = data.shape;
  let newlogoCreated;
  switch(newShape){
    case "circle":
      let newCircle = new createLog.Circle(
        data.text,
        data.ShapeColor,
        data.textColor,
        data.shape
      );
      newlogoCreated = newCircle.render();
     break;
      case "ellipse":
        let newElipse = new createLog.Ellipse(
          data.text,
          data.ShapeColor,
          data.textColor,
          data.shape
        );
        newlogoCreated = newElipse.render();
        break;
        case "polygon":
          let newTrinagle = new createLog.Trinagle(
            data.text,
            data.ShapeColor,
            data.textColor,
            data.shape
          );
          newlogoCreated = newTrinagle.render();
          break;
          case "rect":
            let newRec=new createLog.Reactangle(
              data.text,
              data.ShapeColor,
              data.textColor,
              data.shape
            )
            newlogoCreated=newRec.render()
            break;
  }

 
 

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
