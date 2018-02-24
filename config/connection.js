

// Node Dependency
var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'panther9', // Add your password
    database : 'burger_db' // Add your database
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

 console.log("connected as id " + connection.threadId);
});


// Export the Connection
module.exports = connection;


// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   port: 3000,
//   host: "localhost",
//   user: "root",
//   password: "panther9",
//   database: "burger_db"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: ");
//     return;
//   }
//   console.log("connected as id " );
// });

// // Export connection for our ORM to use.
// module.exports = connection;