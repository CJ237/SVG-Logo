const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require('./shapes.js');
const fs = require('fs');


class CLI {
    run(){
        inquirer
        .prompt([
            {
                name: "letter",
                message: "Enter the 3 letter:  ",

            },
            {
                name: "textColor",
                message: "Enter the text color (color or hexadecimal number): ",
            },
            {
                type: "checkbox",
                name: "shapes",
                message: "Chose a shape you would like to use: ",
                choices: ["triangle", "circle", "square"],
            },
            {
                type: "input",
                name: "shapeColor",
                message: "Enter the color of the shape (color or hexadecimal number): ",
            },
            ]).then(({letter, textColor, shapes, shapeColor}) => {
                if(shapes[0] === "triangle"){
                    const tri = new Triangle(letter,textColor, shapeColor, shapes);
                    fs.writeFile(`./examples/logo.svg`, tri.render(), (err) => {
                        err ? console.error(err) : console.info('Generated logo.svg!');
                    })
                }else if(shapes[0] === "circle"){
                    const cir = new Circle(letter,textColor, shapeColor, shapes);
                    fs.writeFile(`./examples/logo.svg`, cir.render(), (err) => {
                        err ? console.error(err) : console.info('Generated logo.svg!');
                    })
                }else if(shapes[0] === "square"){
                    const sqr = new Square(letter,textColor, shapeColor, shapes);
                    fs.writeFile(`./examples/logo.svg`, sqr.render(), (err) => {
                        err ? console.error(err) : console.info('Generated logo.svg!');
                    })
                }
            }); 
        }
}

module.exports = CLI;