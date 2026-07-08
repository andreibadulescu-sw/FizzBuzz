import { fizzbuzz } from './index'

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(fizzbuzz(3, [true, true, true, true, true, true], true)).toBe('Fizz');
    return;
});

test('fizzbuzz returns "Buzz" for 5', () => {
    expect(fizzbuzz(5, [true, true, true, true, true, true], true)).toBe('Buzz');
    return;
});
