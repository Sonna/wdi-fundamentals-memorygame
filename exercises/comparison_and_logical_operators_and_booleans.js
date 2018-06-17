// ## Exercise
//
// Write the code to perform the actions listed below in the **"JavaScript"**
// panel in the [JS Bin editor](http://jsbin.com/hajibo/edit?js,console,output).
//
// - In the "JavaScript" panel, declare a variable `flavor` and assign it the
//   value to `"chocolate"`.
var flavor = "chocolate";

// Note: After declaring (creating) each variable, be sure to check to make sure
// you've done things correctly by hitting the "Run" button and then typing the
// variable name (`flavor;` in this case) in the "Console" panel and hitting the
// return/enter key to check its value. You'll want to do this after each step.
console.log(flavor);

// - Create a variable `numberScoops` and assign it the value `3`.
var numberScoops = 3;
// - Create a variable `outsideTemperature` and assign it the value `75`.
var outsideTemperature = 75;
// - Create a variable `price` and assign it the value `3.5`.
var price = 3.5;

// ## Exercise (Continued)
//
// - Create a variable `buyIceCream` and set it equal to an expression that
//   incorporates the following:
var buyIceCream;

// -- `price` is less than or equal to `2.5` **OR**
buyIceCream = (price <= 2.5) ||

// -- `outsideTemperature` is greater than or equal to `70` **AND**
  (outsideTemperature >= 70) &&

// -- `flavor` is equal to `"chocolate"` **AND**
  (flavor === "chocolate") &&

// -- `numberScoops` is greater than `1`
  (numberScoops > 1);

// - After hitting "Run", type `buyIceCream;` into the console and hit the
//   return/enter key to see whether or not you should buy that delicious
//   chocolate ice cream cone under the given conditions.
console.log(buyIceCream);

// Stuck? Check out the solutions in the Study Guide at the end of this lesson.
// Not stuck? Compute the output here and do as directed: "Not Stuck" &&
// "Advance to Next Lesson"
