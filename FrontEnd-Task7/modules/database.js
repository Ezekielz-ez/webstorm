'user strict';
const mysql = require('mysql2');

const connect = () =>{
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
  })
};

const selct = (connection)=>{
  connection.query(
      'SELECT * FROM things',
      function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
      },
  );
};

module.exports = {
  connect: connect,
};