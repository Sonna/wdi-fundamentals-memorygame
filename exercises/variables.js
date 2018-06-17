// ## Step 1
// Create the following variables (resist the urge to copy/paste and practice
// typing these out!):
var name = 'Susan Smith';
var age = 20;
var hometown = "Hawaii";

// ## Step 1 (Continued)
// You may see `undefined` displayed in the console after declaring each
// variable and hitting the "return" key:

var name = 'Susan Smith';
// => undefined

// Don't worry too much about this for now, but be aware that this is the
// expected behavior.
//
// **Hint:** You may have noticed that each of those lines ended in a `;`` —
// in JavaScript, a semicolon is used to denote the end of a line. Although your
// code may execute without them, there may be cases in which a missing
// semicolon could cause unexpected results. It's best to just get in the habit
// of using them.

// ## Step 2
// Now try checking, or accessing, the values of the three variables by typing
// each variable name and hitting "enter:"
name;
age;
hometown;

// ## Step 3
// Then, update (reassign) the value of each variable to your own first and last
// name, your own age, and your own location.
//
// For example:
name = 'Amy Hill';
age = 25;
hometown = "San Francisco";

// ## Step 4
// Again, try checking, or accessing, the values of the three variables by
// typing each variable name and hitting "enter:"
name;
age;
hometown;

// ## Summary
// We can redefine our variables `name`, `age`, and `hometown` as many times as
// we want. However, _**only the most recent value of each variable is
// retained**_ Once a variable is redefined, its original value is lost forever.
//
// Consider the following JavaScript code:
var x = 1;
x;
// => 1
x = 2 + x;
// => 3
x;
// => 3

// - On the first line, we are assigning the variable `x`, setting it equal to
//   the integer `1`.
//
// - Then, on the next line, we are reassigning the variable `x`, setting it
//   equal to: `2` plus the most recent value of x (in this case, `1`).
//
// - `x` would now be equal to the integer `3`.

// ## Summary (Continued)
// Suppose we ran the following lines of code in order, one by one.
var x = 10;
x = 1;
x = 5;
x = 15;
x + 2;

// What does that last line evaluate to? Or, put differently, what is the most
// recent value of `x` (as of line 4) + `2`?
//
// If you guessed 17, you're correct!
//
// Is `x`'s value now `17`?
//
// Not so fast! The last time a value was assigned to `x` was on line 4, so `x`
// is still `15`.

// ## Conclusion
// Phew, we covered a lot in this lesson! We defined variables, learned variable
// syntax, discussed how to assign and reassign variables, and reviewed syntax
// guidelines.
//
// Feel free to go back and review this material as necessary.
