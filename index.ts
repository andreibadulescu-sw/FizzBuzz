import process from 'process';
import * as readline from 'readline';

// Main function
function fizzbuzz(answer: number = 100, params: boolean[] = [true, true, true, true, true, true]): void {
    // console.log("Hello, World!");
    // to be continued...

    for (var i: number = 1; i <= answer; i++) {
        let mesg: string = "";
        
        if (i % 3 == 0 && params[0]) {
            mesg += "Fizz";
        }

        if (i % 13 == 0 && params[1]) {
            mesg += "Fezz";
        }

        if (i % 5 == 0 && params[2]) {
            mesg += "Buzz";
        }

        if (i % 7 == 0 && params[3]) {
            mesg += "Bang";
        }

        if (i % 11 == 0 && params[4]) {
            mesg = "Bong";
            if (i % 13 == 0 && params[1]) {
                mesg = "Fezz" + mesg;
            }
        }

        if (i % 17 == 0 && params[5]) {
            mesg = mesg.split('').reverse().join('');
        }

        console.log(mesg == "" ? i : mesg);
    }
}

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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number for the upper limit: ', (answer: string): void => {
    fizzbuzz(Number(answer), flags);
    rl.close();
});

// In order to allow users to implement their own rules
// we would need to prompt them to write a number which
// should divide each element in our sequence and a message
// to display. Inside the function, you loop over the given divisors
// and check if it divides the current number, if it does, you display
// the message.
