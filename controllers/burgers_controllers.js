var express = require("express");
var router = express.router();
//import the model (burgers.js)
var burgers = require("..models/burgers.js");
//create all our routes and set up logic within those routes where required
router.get("/", function(req, res) {
burgers.all(function(data){
    var hbsObject = {
        burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
});
});
//POST Request for a form submit 
router.post("/burgers", function(req, res){
    burgers.create(["name", "devoured"], [req.body.name, req.body.devoured], 
    function(result){
    //send back the ID of the new quote
    res.json({id : result.insertId});
    });
});
