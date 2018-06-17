// ## Exercise
//
// Write the code to perform the actions listed below in the **"JavaScript"**
// panel in the
// [JS Bin editor](http://jsbin.com/gucutuq/edit?js,console,output).
//
// This exercise may be familiar to some of you — your job is to write code
// that, depending on the value of `x`, assigns one of several values to
// `result`:
var x = 15;
var result;

//  1. If `x` is evenly divisible by both 3 and 5 (for example, 15 or 30), set
//     `result` to `"fizzbuzz"`.
if (x % 3 == 0 & x % 5 == 0) {
  result = "fizzbuzz";
}
//  2. Otherwise if `x` is evenly divisible by 3 (for example, 3, 6, or 9), set
//     `result` to `"fizz"`.
else if (x % 3 == 0) {
  result = "fizz";
}
//  3. Otherwise if `x` is evenly divisible by 5 (for example, 5 or 10), set
//     `result` to `"buzz"`.
else if (x % 5 == 0) {
  result = "buzz";
}
//  4. If `x` is not evenly divisible by either 3 or 5 (for example, 7), set
//     `result` to `x`.
else {
  result = x;
}

console.log(result);
// Don't remember how to determine if something divides evenly? Review the
// modulus (`%`) operator.
//
// To test your code, set a value for `x` in the "JavaScript" panel and click
// "Run" in the "Console" panel. Then, type the variable name `result` into the
// "Console" panel and hit "return." Did you get the result you expected? Try
// out several different values for `x`, just to be sure.
//
// Stuck? Check out the solutions in the cheat sheet at the end of this lesson.
