var express = require("express");
var router = express.Router();

//import the model (burgers.js)
var burgers = require("../models/burgers");

//create all our routes and set up logic within those routes where required
router.get("/", function (req, res) {
    burgers.all(function (data) {
        //create and name an object bc handlebar can only pass an object that has a key and value
        var burgerObj = {
            burgers: data
        }
        res.render("index", burgerObj);
    });
});

//POST Request for a form submit 
//needed for ajax
router.post("/burgers", function (req, res) {
    console.log("new burger in backend", req.body)
    //now we add 23-27 bc it works
    burgers.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],
        function (result) {
            //send back the ID of the new burger
            res.json({ id: result.insertId });
        });
});

router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burgers.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                //if no rows were changed, then the ID must not exist so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});
//export routes for server.js to use
module.exports = router;