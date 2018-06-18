// ## Exercise
//
// Write the code to perform the actions listed below in the "JavaScript" panel
// in this [JS Bin editor](http://jsbin.com/gikuni/edit?js,console,output).
//
// In the "JavaScript" panel in JS Bin, define a function sayHello.
//
// - It should accept one parameter, `name`.
// - Inside the function, _return_ a greeting in the following format: `"Hello,
//   *name*"`.
function sayHello(name) {
  return "Hello, " + name;
}

// Hint #1: You'll want to use a return statement here.
//
// Hint #2: You'll want to use string concatenation (`+`) to combine the name
// parameter with the human-readable text for the return statement.
//
// - After hitting the "Run" button in the "Console" panel, call the `sayHello`
//   function in the "Console" panel, using `"Bill"` as the argument.
// - You should see `"Hello, Bill"` displayed in the console.
console.log(sayHello(name));

// ## Exercise (Continued)
//
// In the "JavaScript" panel in JS Bin, define a function `areBothEven`.
//
// - It should accept two parameters, `num1` and `num2`.
// - Inside the function, _return_ `true` if `num1` and `num2` are both even,
//   but false if they are not.
function areBothEven(num1, num2) {
  return (num1 % 2 === 0 && num2 % 2 === 0);
}
console.log(areBothEven(2, 4));

// Hint #1: You can use the modulus operator `%` to see if both numbers are
// even.
//
// Hint #2: If we divide by 2 and have a remainder of 1, we know the number is
// odd. If we have a remainder of 0, then we know that the number is even.
//
// - After hitting the "Run" button in the "Console" panel, call the
//   `areBothEven` function in the "Console" panel, using `2` and `4` as the
//   arguments.
// - You should see `true` displayed in the console.
//
// ## Exercise (Continued)
// In the "JavaScript" panel in JS Bin, define a function `hotOrNot`.
//
// - It should accept one parameter, `temp`.
// - Inside the function, _return_ `"Hot!"` if `temp` is greater than or equal
//   to `70`, but `"Not hot."` if `temp` is less than `70`.
function hotOrNot(temp) {
  return (temp >= 70) ? "Hot!" : "Not hot.";
}

// **HINT:** You'll want to use a conditional statement inside the function.
//
// - After hitting the "Run" button in the "Console" panel, call the `hotOrNot`
//   function in the "Console" panel, using `76` as the argument.
console.log(hotOrNot(76));

// - You should see `"Hot!"` displayed in the console.
// - Test out the function using different numbers for the argument when calling
//   the function to make sure everything is working.
//
// Stuck? Check out the solutions in the Study Guide at the end of this lesson.
// Not stuck? Sweet parameter-izing! See you in the next lesson.
//
