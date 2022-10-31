const mysql = require('mysql')
const dotenv = require ('dotenv')
 dotenv.config();


  const connection = mysql.createConnection({
    host :"loclahost",
    user :"tutorial",
    password :"qwerty123",
    port:"3306",
    // database :"mysql2"

  }) 

  connection.connect ((err)=>{
    if(err){
        console.log(err.message)
    }
    console.log('Connected Successfully ' + connection.state)
    connection.query("CREATE DATABASE mysql3",()=>{
        console.log("Mysql3 Connected");
    })
    connection.query("CREATE TABLE names (ID INT NOT NULL AUTOINCREMENT, name VARCHAR (20))",()=>{
        console.log("table created")
    })
  })