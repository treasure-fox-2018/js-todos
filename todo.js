"use strict"

const serverSide = require("./controller1.js");

let input = process.argv;

let command = input[2];

let datum = input[3];

if (command === undefined) {
  serverSide.displayHelp()
}
