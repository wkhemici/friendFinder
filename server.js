

var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
// app.use("/public", express.static(path.join(__dirname, "app/static")))
app.use(express.static("public"));

const htmlRoutes = require('./routing/htmlRoutes');
const apiRoutes = require('./routing/apiRoutes')

app.use("/api", apiRoutes)
app.use(htmlRoutes)

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
