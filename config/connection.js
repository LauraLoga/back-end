var mysql = require ('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "laura",
    password: "1234",
    database: "scai"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = connection;