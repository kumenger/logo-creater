
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



const questions = [
  {
    type: "input",
    message: "What text for logo?",
    name: "text",
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
    choices:["Circle","Ellipse","Trinagle","Rectangle"],
  },
];



function writeToFile(fileName, data) {
    
  fs.writeFile(fileName, generateMarkdown(data),(err,res)=>{
    if(err){
        console.log('error',err)
    }
  });
}


function init() {
    inquirer.prompt(questions).then((dataHere)=>writeToFile('README.md',dataHere))
}

init();
