const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const http = require('http');
var parseUrl = require('body-parser');
const app = express();
let encodeUrl = parseUrl.urlencoded({ extended: false });
app.use(sessions({
   secret: "thisismysecrctekey",
   saveUninitialized:true,
   cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
   resave: false
}));

app.use(cookieParser());
const port = 3000
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '',      // Replace with your database password
  database: 'nodeprojectnpm install express express-validator mysql body-parser jsonwebtoken bcryptjs cors --save' // // Replace with your database Name
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html') )
app.get('/login', (req, res) => res.sendFile(__dirname + '/login.html') )
app.get('/register', (req, res) => res.sendFile(__dirname + '/register.html') )
app.post('/register', (req, res) => {
   let {username,pw,mail } = req.body;
   let sql = `INSERT INTO users (product_name, product_type, product_brand, product_description, product_url, register_date) values (product_name,product_type,product_brand,product_description,product_url, now())`;
   let query = db.query(sql, product, (err, result) => {
       if(err) throw err;
       return res.send(result)
   });
});
app.post('/register', encodeUrl, (req, res) => {
   var userName = req.body.username;
   var password = req.body.pw;
   var email= req.body.mail;
   console.log(email,userName)
   con.connect(function(err) {
       if (err){
           console.log(err);
       };
       // checking user already registered or no
       con.query(`SELECT * FROM users WHERE user_name=${email} OR email = ${email}`, function(err, result){
         console.log(result);
           console.log(Object.keys(result).length);
           if(err){  
               console.log(err);
           };
           if(Object.keys(result).length > 0){
               res.sendFile(__dirname + '/failReg.html');
           }
           else{
           //creating user page in userPage function
           function userPage(){
               // We create a session for the dashboard (user page) page and save the user data to this session:
               req.session.user = {
                   username: userName,
                   password: password,
               };
               usern="Kayıt Başarılı Hoşgeldin: "+username;
               res.render(__dirname + 'register.html',{name:usern});
               //{req.session.user.firstname} ${req.session.user.lastname}
           }
               // inserting new user data
               var sql = `INSERT INTO users (firstname, lastname, username, password) VALUES ('${firstName}', '${lastName}', '${userName}', '${password}')`;
               con.query(sql, function (err, result) {
                   if (err){
                       console.log(err);
                   }else{
                       // using userPage function for creating user page
                       userPage();
                   };
               });

       }

       });
   });


});
app.get('/database', (req, res) => res.sendFile(__dirname + '/database.html') )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))