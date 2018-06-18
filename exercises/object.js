// ## Exercise
//
// Write code to perform the actions listed below in the "JavaScript" panel of
// this [JS Bin editor](http://jsbin.com/lufunit/edit?js,console,output).
//
// Create an array called `contacts`. The `contacts` array should contain three
// objects — one for each contact stored in our book. Here's the contact
// information for each person:
var contacts = [];

// | firstName  | lastName | phone | email|
// | ---------- | -------- | ----- | ---- |
// | "John" | "Doe" | "(512) 355-0453" | "johndoe@email.com" |
// | "Jane" | "Doe" | "(312) 641-2203" | "janedoe@email.com" |
// | "Suzie" | "Smith" | "(415) 604-4219" | "suziesmith@email.com" |
contacts.push({
  firstName: "John",
  lastName: "Doe",
  phone: "(512) 355-0453",
  email: "johndoe@email.com"
});

contacts.push({
  firstName: "Jane",
  lastName: "Doe",
  phone: "(312) 641-2203",
  email: "janedoe@email.com"
});

contacts.push({
  firstName: "Suzie",
  lastName: "Smith",
  phone: "(415) 604-4219",
  email: "suziesmith@email.com"
});

// Hint: Here's the syntax for creating an array that contains objects:
//
// ```javascript
//   var garden = [
//     {
//      color: 'red',
//      flower: 'rose',
//     },
//     {
//      color: 'blue',
//      flower: 'violet',
//      petals: 6
//     }
//   ];
// ```
//
// ## Exercise (Continued)
//
// Now, let's create a `listContacts` function to list our contacts. This
// function should loop through the `contacts` array and log the first and last
// name for each contact to the console (e.g., `"John Doe"`). Then, call the
// `listContacts` function.
function listContacts() {
  [].forEach.call(contacts, function(contact) {
    console.log(contact.firstName + " " + contact.lastName);
  });
}
listContacts();

// Hint: The syntax for a loop looks like this:
//
// ```javascript
//   for (var i = 0; i < arrayName.length; i++) {
//      // code to execute
//   }
// ```

// Hint: From within the loop, we can use i as an index to find the current item on which we're iterating. If we wanted to log a contact's email from within the loop, it would look like this:
//
// ```javascript
//   for (var i = 0; i < arrayName.length; i++) {
//     console.log(contacts[i].email);
//   }
// ```

// Stuck? Check out the solutions in the cheat sheet at the end of this lesson.
