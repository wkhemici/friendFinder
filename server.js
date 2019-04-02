// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./routing/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);

app.get("/", function(req, res) {
    res.send("hello world")
    });

app.get("/sayhello", function(req, res) {
    res.send("hello there!")
    })

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/home.html"));
      });

      app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/survey.html"));
      });
    //express listens for route aka "/""/ localHhost 8080/ then sends response 

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

//
