// IMPORT MODULES under test here:
import { 
    addExclamationPoints, 
    divideThenMultiply,
    getRandomNumber,
    getSecondItem,
    getLastItem,
    makeLuckyGreeting,
    multiplyBy12ThenHalve, 
    multiplyBySeven,
    returnAsAnArray,
    returnAsAString
} from '../functions.js';

const { test } = QUnit;

test('addExclamationPoints should take a string and add return an new string that adds three exclamation points to the argument', (expect) => {
    const expected = 'puppy!!!';
    const actual = addExclamationPoints('puppy');

    expect.equal(actual, expected, 'add !!!');
});

test('multiplyBySeven should take in a number and multiply it by seven', (expect) => {
    const expected = 14;
    const actual = multiplyBySeven(2);

    expect.equal(actual, expected, 'multiply 2 by 7');
});

test('multiplyBy12ThenHalve should take in a number and multiply it by twelve then cut the result in half', (expect) => {
    const expected = 24;
    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, 'multiply 4 by 12 then divide by 2');

});

test('divideThenMultiply should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 1.5;
    const actual = divideThenMultiply(1, 2, 3);

    expect.equal(actual, expected, 'multiply 1 by 2 then divide by 3');
});

test('returnAsAnArray should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [1, 2, 3];
    const actual = returnAsAnArray(1, 2, 3);

    expect.deepEqual(actual, expected, 'should return [1, 2, 3]');
});

test('returnAsAString should take in three numbers and return those numbers mushed together as a string', (expect => {
    const expected = '123';
    const actual = returnAsAString(1, 2, 3);
    
    expect.equal(actual, expected, 'should return "123"');
}));

test('makeLuckyGreeting should take in two numbers and return a greeting announcing that the sum of those numbers is today\'s lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';
    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected, 'should return 12')
});

test('getSecondItem should take an array and return the second item in the array', (expect) => {
    const array = ['kiwi', 'apple', 'orange', 'plum'];

    const expected = 'apple';
    const actual = getSecondItem(array);

    expect.equal(actual, expected, 'should return "apple"');
});

test('getLastItem should take an array and return the LAST item in the array, no matter the array\'s length', (expect) => {
    const array = ['kiwi', 'apple', 'orange', 'plum'];

    const expected = 'plum';
    const actual = getLastItem(array);

    expect.equal(actual, expected, 'should return "plum"');
});

test('getRandomNumber should make a random number between 0 and 5', (expect) => {
    const actual = true;
    const expected = getRandomNumber();

    expect.equal(actual, 0 <= expected <= 5, `${expected} is a number between 0 and 5`);
});
