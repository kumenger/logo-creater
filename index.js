const inquirer = require("inquirer");
const fs = require("fs");
const createLog = require("./lib/generateSvg");
//validate if text length is not more than three and giving this function to validate property
const textLengValidate=(input)=>{
  if(input.length>3){
    return 'text can not be greter that there characters please try again!!'
  }
  return true
}
// user selcte shape color for ceating logo
const questions = [
  {
    type: "input",
    message: "What text for logo to use?(must not be there characters long)",
    name: "text",
   validate:textLengValidate
  },
  {
    type: "input",
    message: "Color to fill the shape",
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
    choices: ["Circle", "Ellipse", "Triangle", "Rectangle"],
  },
];

//this func calls createlogo calss by switching shape cases and and calling render method in the class
function createLogo(fileName, data) {
  let newShape = data.shape;
  let newlogoCreated;
  switch(newShape){
    case "Circle":
      let newCircle = new createLog.Circle(
        data.text,
        data.ShapeColor,
        data.textColor,
        data.shape
      );
      newlogoCreated = newCircle.render();
     break;
      case "Ellipse":
        let newElipse = new createLog.Ellipse(
          data.text,
          data.ShapeColor,
          data.textColor,
          data.shape
        );
        newlogoCreated = newElipse.render();
        break;
        case "Triangle":
          let newTrinagle = new createLog.Trinagle(
            data.text,
            data.ShapeColor,
            data.textColor,
            data.shape
          );
          newlogoCreated = newTrinagle.render();
          break;
          case "Rectangle":
            let newRec=new createLog.Reactangle(
              data.text,
              data.ShapeColor,
              data.textColor,
              data.shape
            )
            newlogoCreated=newRec.render()
            break;
  }
 
//based on switch result create a file 
  fs.writeFile(fileName, newlogoCreated, (err, res) => {
    if (err) {
      console.log("error", err);
    }
  });
}
//calling the method by giving directory and file type(.svg)
const answers= async()=>{
  let result= await inquirer.prompt(questions)
  createLogo("./dist/logo.svg",result)
}
answers()