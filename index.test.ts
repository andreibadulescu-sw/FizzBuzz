import { fizzbuzz } from './index'

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(3, [true, true, true, true, true, true], true)).toBe('Fizz');
    return;
});

test('fizzbuzz returns "Buzz" for 5', () => {
    expect(fizzbuzz(5, [true, true, true, true, true, true], true)).toBe('Buzz');
    return;
});

test('fizzbuzz returns "Fezz" for 13', () => {
    expect(fizzbuzz(13, [true, true, true, true, true, true, true], true)).toBe('Fezz');
    return;
});

test('fizzbuzz returns "Bang" for 7', () => {
    expect(fizzbuzz(7, [true, true, true, true, true, true, true], true)).toBe('Bang');
    return;
});

test('fizzbuzz returns "Bong" for 11', () => {
    expect(fizzbuzz(11, [true, true, true, true, true, true], true)).toBe('Bong');
    return;
});

test('fizzbuzz returns "FezzBong" for 143', () => {
    expect(fizzbuzz(143, [true, true, true, true, true, true], true)).toBe('FezzBong');
    return;
});

test('fizzbuzz returns "zzuB" for 85', () => {
    expect(fizzbuzz(85, [true, true, true, true, true, true], true)).toBe('zzuB');
    return;
});

