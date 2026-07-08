import process from 'process';
import * as readlineSync from 'readline-sync';

function computeMesg(value: number, params: boolean[]): string {
    let mesg: string = "";

    if (value % 3 == 0 && params[0]) {
        mesg += "Fizz";
    }

    if (value % 13 == 0 && params[1]) {
        mesg += "Fezz";
    }

    if (value % 5 == 0 && params[2]) {
        mesg += "Buzz";
    }

    if (value % 7 == 0 && params[3]) {
        mesg += "Bang";
    }

    if (value % 11 == 0 && params[4]) {
        mesg = "Bong";
        if (value % 13 == 0 && params[1]) {
            mesg = "Fezz" + mesg;
        }
    }

    if (value % 17 == 0 && params[5]) {
        mesg = mesg.split('').reverse().join('');
    }

    return mesg;
}

// Main function
export function fizzbuzz(answer: number = 100, params: boolean[] = [true, true, true, true, true, true], debug: boolean = false): string {
    // console.log("Hello, World!");
    // to be continued...

    if (debug) {
        return computeMesg(answer, params);
    }

    /* istanbul ignore next */
    for (var i: number = 1; i <= answer; i++) {
        let mesg = computeMesg(i, params);
        console.log(mesg == "" ? i : mesg);
    }

    /* istanbul ignore next */
    return "";
}

/* istanbul ignore next */
function main()
{
    const args = process.argv.slice(2);
    var flags: boolean[] = new Array(6);

    for (let i: number = 0; i < flags.length; i++) {
        flags[i] = true;
    }

    for (let i = 0; i < args.length; i++) {
        if (args[i] == "Fizz") {
            flags[0] = false;
        }

        if (args[i] == "Fozz") {
            flags[1] = false;
        }

        if (args[i] == "Buzz") {
            flags[2] = false;
        }

        if (args[i] == "Bang") {
            flags[3] = false;
        }

        if (args[i] == "Bong") {
            flags[4] = false;
        }

        if (args[i] == "Reverse") {
            flags[5] = false;
        }
    }

    let maxNumber: number = readlineSync.questionInt('Enter a number for the upper limit: ');
    fizzbuzz(maxNumber, flags);

    // In order to allow users to implement their own rules
    // we would need to prompt them to write a number which
    // should divide each element in our sequence and a message
    // to display. Inside the function, you loop over the given divisors
    // and check if it divides the current number, if it does, you display
    // the message.
}

/* istanbul ignore next */
if (process.argv[1].includes("index.ts")) {
    main();
}