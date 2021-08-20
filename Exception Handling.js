// //Example of try and catch block-->

// "use strict"

// function getElement(arr, pos) {
//     return arr[pos];
// }


// //let arr = [1, 2, 3, 4, 5];

// try {
//     console.log(getElement(arr, 4));
// } 
// catch (e) {
//     console.log(e.message);
// }
// console.log("The program continued executing!");

// //Example of try-finally block
// //let arr = [1, 2, 3, 4, 5];

// try {
//     console.log(getElement(arr, 4));
// } 
// finally {
//     console.log("Finally Block");
// }
// console.log("The program continued executing!");

// // assignment to constant variable
// "use strict";

// const arr = [1, 2, 3, 4, 5];

// try {
//     arr = [4, 2];
//     console.log(arr.sort());
// } 
// catch (e) {
//     console.log(e.message);
// }

function throwString() {
    // Generate an exception with a String value
    throw "some exception";
}

function throwFalse() {
    // Generate an exception with a boolean value of false
    throw false;
}

function throwNumber() {
    // Generate an exception with a Number value of -1
    throw -1;
}

try {
    throwString();
}
catch (e) {
    console.log(e);
}

try {
    throwFalse();
}
catch (e) {
    console.log(e);
}

try {
    throwNumber();
}
catch (e) {
    console.log(e);
}