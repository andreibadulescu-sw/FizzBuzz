"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzbuzz = fizzbuzz;
var process_1 = require("process");
var readlineSync = require("readline-sync");
var defaultFlags = Array(6).fill(true);
var defaultBoundary = 100;
function computeMesg(value, params) {
    var mesg = new Array();
    if (value % 3 === 0 && params[0]) {
        mesg.push("Fizz");
    }
    if (value % 13 === 0 && params[1]) {
        mesg.push("Fezz");
    }
    if (value % 5 === 0 && params[2]) {
        mesg.push("Buzz");
    }
    if (value % 7 === 0 && params[3]) {
        mesg.push("Bang");
    }
    if (value % 11 === 0 && params[4]) {
        while (mesg.length)
            mesg.pop();
        mesg.push("Bong");
        if (value % 13 === 0 && params[1]) {
            mesg.unshift("Fezz");
        }
    }
    if (value % 17 === 0 && params[5]) {
        mesg = mesg.reverse();
    }
    return mesg.join('');
}
// Main function
function fizzbuzz(answer, params, debug) {
    if (answer === void 0) { answer = defaultBoundary; }
    if (params === void 0) { params = defaultFlags; }
    if (debug === void 0) { debug = false; }
    // skip the main loop and return the message directly for the checked value
    if (debug) {
        return computeMesg(answer, params);
    }
    // computing and displaying message for every number
    /* istanbul ignore next */
    for (var i = 1; i <= answer; i++) {
        var mesg = computeMesg(i, params);
        console.log(mesg === "" ? i : mesg);
    }
    // return is always discarded on a normal run
    /* istanbul ignore next */
    return "";
}
/* istanbul ignore next */
function main() {
    // extracting flags
    var args = process_1.default.argv.slice(2);
    var flags = new Array(6);
    // initializing flags with default values
    for (var i = 0; i < flags.length; i++) {
        flags[i] = defaultFlags[i];
    }
    // searching through all arguments
    for (var i = 0; i < args.length; i++) {
        if (args[i] === "Fizz") {
            flags[0] = false;
        }
        if (args[i] === "Fezz") {
            flags[1] = false;
        }
        if (args[i] === "Buzz") {
            flags[2] = false;
        }
        if (args[i] === "Bang") {
            flags[3] = false;
        }
        if (args[i] === "Bong") {
            flags[4] = false;
        }
        if (args[i] === "Reverse") {
            flags[5] = false;
        }
    }
    // querying user for upper boundary
    var maxNumber = readlineSync.questionInt('Enter a number for the upper limit: ');
    fizzbuzz(maxNumber, flags);
    // In order to allow users to implement their own rules
    // we would need to prompt them to write a number which
    // should divide each element in our sequence and a message
    // to display. Inside the function, you loop over the given divisors
    // and check if it divides the current number, if it does, you display
    // the message.
}
// starts execution of main() only if the executed
// file is `index.ts`
/* istanbul ignore next */
if (process_1.default.argv[1].includes("index.ts")) {
    main();
}
