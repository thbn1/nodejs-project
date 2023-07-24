var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nodeproject",
 
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `create table permission(
        id int primary key auto_increment,
        permname varchar(40) not null,
    )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
  