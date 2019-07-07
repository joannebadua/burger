var connection = require("../config/connection.js");
["?","?","?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toStrin();
}
//helper function that converts object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    //loop through the keys and push the key/value as a string into array
    for (var key in ob){
        var value = ob[key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            if(typeofvalue === "string" && value.indexOf("")>+0) {
                arr.push(key + "=" + value);
            }
        }
        return arr.toString();
    }
}
//object for all our sql statement functions
var orm = {
    all:function(tableInput, cb){
        var queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += "(";
        queryString += cols.toString();
        queryString += ")";
        queryString += "VALUES (";
        queryString += printQuestionMARKS (vals.length);
        queryString += ")";
        console.log(queryString);
        connection.query(queryString, vals, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};
//export the orm object for the models (burgs.js in models folder)
module.exports=orm