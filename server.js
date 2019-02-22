var express = require("express");

var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require router files to define routes
require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

// start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
