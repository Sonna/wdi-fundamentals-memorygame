// ## Exercise
//
// - Write code to perform the actions listed below in the "JavaScript" panel of
//   this [JS Bin editor](http://jsbin.com/zemani/edit?js,console,output).
//
// - In the "JavaScript" panel, create a `poem` object with the following
//   properties:
//
// | Name | Value |
// | ---- | ----- |
// | author | "Robert Frost" |
// | datePublished | 1916 |
// | name | "The Road Not Taken" |
// | famousLine | "Two roads diverged in a yellow wood" |
var poem = {
  author: "Robert Frost",
  datePublished: 1916,
  name: "The Road Not Taken",
  famousLine: "Two roads diverged in a yellow wood",
  quotePoem: function() {
    console.log(this.famousLine);
  }
};

// - Now, add a `quotePoem` method to the `poem` object.
//
// ## Exercise (Continued)
//
// - Inside the method, add a `console.log()` statement, logging the
//   `famousLine` property.
//
// **Hint:** You'll want to use the `this` keyword to log out the `famousLine`
// property for the `poem` object.
//
// - Now, call the `quotePoem` method.
poem.quotePoem();

// **Hint:** The syntax for calling a method looks like this:
//
// ```javascript
//   objectName.methodName();
// ```
//
// - Hit the "Run" button in the "Console" panel to test things out!
//
// Stuck? Check out the solutions in the cheat sheet at the end of this lesson.
