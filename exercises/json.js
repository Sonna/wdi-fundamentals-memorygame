// ## Exercise
//
// Write code to perform the actions listed below in the "JavaScript" panel of
// this [JS Bin editor](http://jsbin.com/ruqelev/edit?js,console,output).
//
// - JSONLint is a helpful online tool for checking JSON syntax to ensure that
//   it is valid. Take a look at the object below. Copy it entirely. Then, go to
//   [JSONLint](http://jsonlint.com/) and paste it into the validator. Does it
//   pass the test?
//
// ```javascript
// {
//   "someKey": "someValue",
//   "innerArray": [
//     "alpha",
//     "beta",
//     "gamma",
//     "delta"
//   ]
// }
// ```
var grungeAlbums = {
  "albums":[
    {
        "name": "Bleach",
        "artist": "Nirvana",
        "unitsSold": 1700000
    },
    {
        "name": "Nevermind",
        "artist": "Nirvana",
        "unitsSold": 30000000
    },
    {
        "name": "In Utero",
        "artist": "Nirvana",
        "unitsSold": 15000000
    },
    {
        "name": "Ten",
        "artist": "Pearl Jam",
        "unitsSold": 10000000
    },
    {
        "name": "Vs",
        "artist": "Pearl Jam",
        "unitsSold": 6100000
    },
    {
        "name": "Vitalogy",
        "artist": "Pearl Jam",
        "unitsSold": 4770000
    }
  ]
};

// ## Exercise (Continued)
//
// - The following line is valid JavaScript, but the object is not written in
//   valid JSON syntax. Use JSONLint to validate the above object. Then, update
//   the object to use the correct JSON syntax so it passes the validator.
//
// ```javascript
// {
//   name: 'Eddie Vedder',
//   age: 49
// }
// ```
var person = {
  'name': 'Eddie Vedder',
  'age': 49
}

// - Take a look at the `grungeAlbums` object provided in the JS Bin editor.

// -- In the "JavaScript" panel, use the `JSON.stringify()` method to turn the
//    grungeAlbums JavaScript object into a JSON string and store it in a
//    variable `grungeAlbumsJSON`.
var grungeAlbumsJSON = JSON.stringify(grungeAlbums);

// -- Then, use the `JSON.parse()` method to convert grungeAlbumsJSON back into
//    a JavaScript object and store it in the `grungeAlbumsObject` variable.
var grungeAlbumsObject = JSON.parse(grungeAlbumsJSON);

// -- Log each variable to the console to compare, while also comparing them to
//    the original object. You'll need to hit the "Run" button in the "Console"
//    panel to see the output of the `console.log()` statements.
console.log(grungeAlbumsJSON);
console.log(grungeAlbumsObject);

// ## Exercise (Continued)

// - Now, loop through each album in `grungeAlbumsObject` and use a
//   `console.log()` statement to print out the album name, artist, and units
//   sold. Each album should be formatted like so:
//
// ```shell
// Album: Album name
// Artist: Artist name
// Units sold: 31234
// ```
grungeAlbumsObject.albums.forEach(function(album) {
  console.log("Album: " + album.name);
  console.log("Artist: " + album.artist);
  console.log("Units sold: " + album.unitsSold);
});

// - Hit the "Run" button in the console and you should see the information for
//   each album displayed in the console.

// **Hint:** You'll want to use a `for` loop for this step.

// Stuck? Check out the solutions in the cheat sheet at the end of this lesson.
