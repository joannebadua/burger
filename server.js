var express = require("express");
var app = express();
var PORT = process.env.PORT || 8081;

var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var burgerRoutes = require("./controllers/burgers_controllers.js");
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(burgerRoutes);
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});