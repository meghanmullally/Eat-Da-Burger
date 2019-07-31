// Import MySQL connection 

var connection = require("../config/connection");


function printQuestionMark(num) {
  var array = [];

  for (var i = 0; i < num; i++) {
    array.push("?");
  }
  return array.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all SQL statement functions 

var orm = {

  selectAll: function (tableInput, cb) {
    queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    })
  },


  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " ( ";
    queryString += cols.toString();
    queryString += " ) ";
    queryString += " VALUES (";
    queryString += printQuestionMark(vals.length);
    queryString += "); ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;
      cb(result);
    });

  },

  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  }
};


// export the orm object for the model (burger.js)
module.exports = orm;