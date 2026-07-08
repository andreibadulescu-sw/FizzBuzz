# FizzBuzz

Repository created by Andrei-Marcel Badulescu, July 8th 2026.

## About this app

This repository contains a source file named `index.ts`, where
the main functions live (i.e. `fizzbuzz`, `computeMesg`). The program
allows for custom rule enabling / disabling, upper limit setup, as well
as debugging when needed.

The test suite contained inside `index.test.ts` asserts the return value
of the `fizzbuzz` function for various inputs, thus confirming the correct
behaviour of the function for each rule individually.

## Running this app

To launch into execution `index.ts`, run while in the rootdir `npm run start`.
The program will ask you for an upper limit; please make sure to insert a number
and not gibberish, as the converter will prompt for correct input again.
For each number from 1 to the upper limit, either the message is shown if
it exists or the number itself.

To enable / disable rules individually, run `npm run start [Fizz] [Buzz] [Bong]
[Bang] [Fezz] [Reverse]`. You can insert them in any order you want.

## Running the test suite

To run the test suite, use `npm run test`. This will launch each unit test using
`jest` and provide at the end a resolution, containing the number of passed tests,
as well as a coverage report for `index.ts`.
