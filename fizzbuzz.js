// write a function that returns 'fizz' for all numbers that are a multiple of 3, but not 5
// write a function that returns 'buzz' for all numbers that are a multiple of 5, but not 3
// write a function that returns "fizzbuzz" for all numbers that are multiples of 3 and 5
// for all other numbers, return "." that are not multiples of 3 or 5

// Variable Declarations
var avow = require('avow');

//  Functional Declarations
function FizzBuzz(n) {
    var output = '';
    for (var i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            output += 'FizzBuzz';
         }
        else if (i % 3 === 0) {
            output +='Fizz';
        }
        else if (i % 5 === 0) {
            output += 'Buzz';
        }
        else {
            output += '.';
        }
    }

    return output;
}

FizzBuzz(15)

// Tests (do not modify these)
avow('FizzBuzz 1 should be .', '.' === FizzBuzz(1), '.', FizzBuzz(1));
avow('FizzBuzz 2 should be ..', '..' === FizzBuzz(2), '..', FizzBuzz(2));
avow('FizzBuzz 3 should be ..Fizz', '..Fizz' === FizzBuzz(3), '..Fizz', FizzBuzz(3));
avow('FizzBuzz 5 should be ..Fizz.Buzz', '..Fizz.Buzz' === FizzBuzz(5), '..Fizz.Buzz', FizzBuzz(5));
avow('FizzBuzz 10 should be ..Fizz.BuzzFizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz' === FizzBuzz(10), '..Fizz.BuzzFizz..FizzBuzz', FizzBuzz(10));
avow('FizzBuzz 15 should be ..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz' === FizzBuzz(15), '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', FizzBuzz(15));
