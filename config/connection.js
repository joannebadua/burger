// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection;
var connectionString = "mysql://rwgioh85qur9epde:ghmqiowo1od64mtc@o61qijqeuqnj9chh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/mcc6oy8znf9wjbla";
// if(process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
// connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });

// }
connection = mysql.createConnection(connectionString);
// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
