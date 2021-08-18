'use strict';

const fs = require('fs');
const readline = require('readline');

var text = fs.readFileSync("./input.txt", "utf-8");
let input = text.split("\n")
  

console.log(4 == "4");


//let and var concept
"use strict"
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    var a = input;

    // If 'a' is odd:
    if (a % 2 == 1) {
        // Increment 'a' by 1
        let a = 13;
        console.log("if(a): " + a);
    }

    console.log("main(a): " + a);
}


//it gives error bcz redeclaration of variable a using let
function main(input) {
    let a = input;

    // This will throw "SyntaxError: Identifier 'a' has already been declared"
    let a = input + 1;

    console.log(a); 
}

//const keyword read only
function main(input) {
    const a = input;

    // This will throw "SyntaxError: Missing initializer in const declaration"
    const b; 

    console.log(a);
}

//switch statement---->
function getLetter(s) {
    let letter;
    // Write your code here
    switch(s.charAt){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            letter = "A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            letter = "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            letter = "C";
            break;
        default:
            letter = "D";
    }
    
    return letter;
}


function main(s) {
    
    console.log(getLetter(s));
}

//for in loop--->


class Monster {
    constructor(name, home, description) {
        this.name = name;
        this.home = home;
        this.description = description;
    }
}
main(input);
function main(input) {
    var monster = new Monster(input[0], input[1], input[2]);

    console.log(monster);

    var list = [1,2,3];

    for(let i of list){
        console.log(i);
    }

    for (let property in monster) {
        console.log(property + ": " + monster[property]);
    }
}