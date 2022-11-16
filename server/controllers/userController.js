//Our Logic of The Application
const mysql = require('mysql');
require('dotenv').config();



const pool = mysql.createPool({
    connectionLimit : 100,
    host            :process.env.DB_HOST,
    user            :process.env.DB_USER,
    password        :process.env.DB_PASS,
    database        :process.env.DB_NAME,
 }) ; 

//   connecting to DB
 


module.exports = {
    view:(req,res)=>{

        pool.getConnection((err,connection)=>{
            //if not connected
            if (err) throw err ;
            //if connection is successfully
            console.log('connected as ID' + connection.threadId);


    // user Connection
    connection.query('SELECT * FROM users ',(err, rows)=>{
        // when done with the connection release it 

        connection.release();

        if(!err)
        res.render('home', {rows});
        else{
            console.log(err)
    }
    console.log('the data from the usermanagement Db: \n', rows)

    });




         });
    }




}