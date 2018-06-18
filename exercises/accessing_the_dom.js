// const jsdom = require("jsdom");

// const dom = new JSDOM(`
// <!DOCTYPE html>
// <html>
// <head></head>
// <body>
// <h1>Reading List</h1>

// <ul class="list">
//   <li class="current">The Wind Up Bird Chronicle</li>
//   <li class="current">A Visit From the Goon Squad</li>
//   <li id="next">The Flamethrowers</li>
//   <li>To Kill a Mockingbird</li>
//   <li>Kafka on the Shore</li>
// </ul>

// <button id="chill">Chill!</button>
// </body>
// </html>
// `);

// ## Exercise
//
// Take a look at the starter code that has been provided for you in [JS
// Bin](http://jsbin.com/wasidij/edit?js,console,output).
//
// We'll be using the `textContent` property for these exercises so that we can
// see the results and make sure that we've made the correct selections in our
// JavaScript.
//
// The `textContent` property allows us to update the text for an element.
// Here's what the syntax looks like:
//
// ```javascript
//   yourJavaScriptSelectorHere.textContent = "New text content goes here";
// ```
//
// For example:
//
// ```javascript
//   document.getElementById('main').textContent = "Updated!";
// ```
//
// ## Exercise (Continued)
//
// - Use the `querySelectorAll()` method to select all elements with the `current`
//   class and then, using array syntax (our trusty square brackets), update the
//   selection to only select the _second_ element with the `current` class. After
//   you've made your selection, add the following code onto the end of the
//   selection: `.textContent = "The Violent Bear It Away";`

document.querySelectorAll('.current')[1].textContent = "The Violent Bear It Away";
// dom.window.document.querySelectorAll('.current')[1].textContent = "The Violent Bear It Away";

// - Use the `getElementById()` method to find the element with the ID `next`.
//   After you've made your selection, add the following code onto the end of
//   the selection: `.textContent = "Me Talk Pretty One Day";`
document.getElementById('next').textContent = "Me Talk Pretty One Day";

// - Find the first `li` using the `querySelector()` method. After you've made
//   your selection, add the following code onto the end of the selection:
//   .textContent = "Brothers Karamazov";
document.querySelector('li').textContent = "Brothers Karamazov";

// - Use the `getElementsByTagName()` method to select all `li` elements. Then, use
//   array syntax to select the fourth `li`. After you've made your selection, add
//   the following code onto the end of the selection: `.textContent = "JavaScript
//   is Fun!"`;
document.getElementsByTagName('li').textContent = "JavaScript is Fun!";

// Stuck? Check out the solutions in the Study Guide at the end of this lesson.
// Not stuck? You DOM-inated this lesson! See you in the next one.

// console.log(dom.window.document);
