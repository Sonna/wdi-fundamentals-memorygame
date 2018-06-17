// ## Exercise
//
// Write the code to perform the actions listed below in the "JavaScript" panel
// of this [JS Bin editor](http://jsbin.com/hutetuz/edit?js,console,output).
//
// In the conditionals lesson's exercise, FizzBuzz, we wrote code that took an
// input, `x`, and set a new `result` value according to a specific set of
// rules.
//
// This time, your challenge is to loop through every number from 1 to `max`,
// applying those exact same rules to each number and, before ending the loop,
// printing the result out in the console using the `console.log(result);`
// command.
//
var max = 20;
var number = 0;
var result;

while (number < max) {
  number++;
  if (number % 3 == 0 & number % 5 == 0) {
    console.log("fizzbuzz");
  }
  else if (number % 3 == 0) {
    console.log("fizz");
  }
  else if (number % 5 == 0) {
    console.log("buzz");
  }
  else {
    console.log(number);
  }
}
// For reference, if `max` is `20`, the following should be displayed in the
// console:
//
// ```javascript
//   1
//   2
//   fizz
//   4
//   buzz
//   fizz
//   7
//   8
//   fizz
//   buzz
//   11
//   fizz
//   13
//   14
//   fizzbuzz
//   16
//   17
//   fizz
//   19
//   buzz
// ```

// ## Exercise (Continued)
//
// Testing any number less than 20 should give you a subset of that result — in
// other words, if `max` is `5`, we get the following:
//
// ```javascript
//   1
//   2
//   fizz
//   4
//   buzz
// ```
//
// Stuck? Check out the solutions in the cheat sheet at the end if this lesson
