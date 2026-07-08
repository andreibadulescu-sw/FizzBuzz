import { fizzbuzz } from './index'

const defaultTestFlags: boolean[] = Array(6).fill(true);
const debugFlag: boolean = true;

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(3, defaultTestFlags, debugFlag)).toBe('Fizz');
    return;
});

test('fizzbuzz returns "Buzz" for 5', () => {
    expect(fizzbuzz(5, defaultTestFlags, debugFlag)).toBe('Buzz');
    return;
});

test('fizzbuzz returns "Fezz" for 13', () => {
    expect(fizzbuzz(13, defaultTestFlags, debugFlag)).toBe('Fezz');
    return;
});

test('fizzbuzz returns "Bang" for 7', () => {
    expect(fizzbuzz(7, defaultTestFlags, debugFlag)).toBe('Bang');
    return;
});

test('fizzbuzz returns "Bong" for 11', () => {
    expect(fizzbuzz(11, defaultTestFlags, debugFlag)).toBe('Bong');
    return;
});

test('fizzbuzz returns "FezzBong" for 143', () => {
    expect(fizzbuzz(143, defaultTestFlags, debugFlag)).toBe('FezzBong');
    return;
});

test('fizzbuzz returns "BuzzFizz" for 255', () => {
    expect(fizzbuzz(255, defaultTestFlags, debugFlag)).toBe('BuzzFizz');
    return;
});

