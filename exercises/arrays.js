// ## Exercise
//
// Write the code to perform the actions listed below in the **"JavaScript"**
// panel of the [JS Bin editor](http://jsbin.com/gikuni/edit?js,console,output).
//
// - Create a `contacts` array. This array should contain the names `"Matt
//   Smith"`, `"Sam Davis"`, and `"Ashley Jones"`.
var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];

// Note: Be sure to hit the "Run" button and then check your work in the
// "Console" panel after each step. To see what the `contacts` array holds at
// any point, you can type `contacts;` into the "Console" panel.
//
// - Create a `dad` variable and assign it the value of the second element
//   (item) in the array, `"Sam Davis"`.
var dad = contacts[1];

// **Hint:** Remember, arrays are _zero-based_, so the first element in the
// array has an index of `0`. To access the first element in the array, we would
// use the following syntax: `contacts[0]`.


// ## Exercise (Continued)
//
// - Update the first element in the array. The new value should be `"Mark
//   Williams"`.
contacts[0] = "Mark Williams";

// - Use the `pop()` method to remove the last element from the array (`"Ashley
//   Jones"`).
contacts.pop();

// - Use the `push()` method to add `"Michelle Johnson"` to the end of the
//   array.
contacts.push("Michelle Johnson");

// - Create a `numberOfContacts` variable and assign it the value of the length
//   of the 'contacts' array.
var numberOfContacts = contacts.length;

// **HINT:** You can use the length property to get the length of an array.
//
// Once you're satisfied, feel free to move on to the next lesson.
//
// Stuck? Check out the solutions in the cheat sheet at the end of this lesson
