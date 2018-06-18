// ```css
//   .box-1 { background-color: red; }
//   .box-2 { background-color: green; }
//   .box-3 { background-color: blue; }
// ```

// ## Exercise
//
// Write code to perform the actions listed below in the "JavaScript" panel of
// this [JS Bin editor](http://jsbin.com/novoki/edit?js,console,output).
//
// In this challenge, we'll be using the `document` object to create some
// abstract art. We'll be making three elements of different dimensions and
// colors and then adding them to the DOM.
//
// Are you ready?
//
// - Create a `for` loop. For the `for` loop, i should have an initial value of
//   `1` and the loop should run three times. Each time the loop runs, create a
//   `div` element using the `createElement()` method and store it in a
//   `boxElement` variable.
for (var i = 1; i < 4; i++) {
  var boxElement = document.createElement('div');
  boxElement.className = "box-" + i;
  document.getElementsByTagName('body').appendChild(boxElement);
}

// ## Exercise (Continued)
//
// - All right! Next, let's add some styles for each `div`. In the CSS tab,
//   we've defined some styles for you to use. Each time the `for` loop runs, we
//   want to add a class to the current `boxElement` using the `className`
//   property. This will apply the styles in our CSS that are associated with
//   that class.
//
// -- The class name for the first box should be `box-1`.
//
// -- The class name for the second box should be `box-2`.
//
// -- The class name for the third box should be `box-3`.
//
// **Hint:** For the class name, we can use string concatenation to add the
// number to `box-`. This will look like: `'box-' + i;`.
//
// - Also within the `for` loop, use the `appendChild()` method to append each
//   `boxElement` to the body.
//
// After the third step, you should see the abstract art displayed in the
// "Output" panel. If you don't see anything, make sure the "Auto-run JS"
// checkbox is ticked.
//
// Stuck? Check out the solutions in the cheat sheet at the end of this lesson.
