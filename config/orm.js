// Import Node Dependencies
var connection = require('./connection.js');

console.log("This is running");
// Methods for MySQL commands
var orm = {

  // selectAll() select all elements of burger_name
  selectAll: function(callback) {
console.log("selectAll is running");
    // Run MySQL Query
    connection.query('SELECT * FROM burger', function (err, result) {
      console.log(result)

      if (err) throw err;
      callback(result);
    });

  },

  // insertOne()
  insertOne: function(burger_name, callback){
console.log("insertOne is running");
    // Run MySQL Query
    //Inserts new burger into burger_name
    connection.query('INSERT INTO burger SET ?', {
      burger_name: burger_name,
      devoured: false, //Sets burger devoured to false
    }, function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },

  // updateOne() updates devoured to true of the burger selected in the table
  updateOne: function(burgerID, callback){
console.log("updateOne is running");
    // Run MySQL Query
    connection.query('UPDATE burger SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
        if (err) throw err;
        callback(result);
      });

  }

};



// Export the ORM object in module.exports.
module.exports = orm;