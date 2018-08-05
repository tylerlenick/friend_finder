// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Requiring routing pages.
require(".app/routing/apiRoutes.js")(app);
require(".app/routing/htmlRoutes.js")(app);

//Requiring friend data page.
var friendArr = require("./app/data/friends.js");

console.log(friendArr);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});