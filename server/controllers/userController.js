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
    connection.query(`SELECT * FROM users WHERE status = 'active' `,(err, rows)=>{
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
    },
    find:(req,res)=>{
        pool.getConnection((err,connection)=>{

            //if not connected
            if (err) throw err ;
            //if connection is successfully
            console.log('connected as ID' + connection.threadId);
            
            const searchTerm = req.body.search; 


    // Find User By Search
    connection.query('SELECT * FROM users WHERE FirstName LIKE ? OR  LastName LIKE ? ' ,['%'+ searchTerm +'%','%'+ searchTerm +'%'],(err, rows)=>{
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
    },

    forms:(req,res)=>{
        res.render('adduser')
        
    },

    // CREATING A USER
    create:(req,res)=>{
        const {FirstName,LastName,email,phone,comments} = req.body;
        pool.getConnection((err,connection)=>{

            if (err) throw err ;
            console.log('connected as ID' + connection.threadId);
            connection.query("INSERT INTO users SET FirstName = ? , LastName = ?, email = ?, phone = ? , comments  = ? ",[FirstName,LastName,email,phone,comments],(err, rows)=>{
        connection.release();
        if(!err)
        res.render('adduser',{alert : "User Create Successfully."});
        else{
        console.log(err);
    }
    console.log('the data from the usermanagement Db: \n', rows)

    });
     }); 
    },
    // EDIT USER 
    edit:(req,res)=>{
        pool.getConnection((err,connection)=>{

            //if not connected
            if (err) throw err ;
            //if connection is successfully
            console.log('connected as ID' + connection.threadId);


    // Eding a user
    connection.query('SELECT * FROM users WHERE id = ?' ,[req.params.id],(err, rows)=>{
        // when done with the connection release it 

        connection.release();

        if(!err)
        res.render('edituser',{rows});
        
        else{
            console.log(err)
    }
    console.log('the data from the usermanagement Db: \n', rows)

    });
     });
    },
    update:(req,res)=>{

   const {FirstName,LastName,email,phone,comments} = req.body;

        pool.getConnection((err,connection)=>{

            //if not connected
            if (err) throw err ;
            //if connection is successfully
            console.log('connected as ID' + connection.threadId);


    // updating  a user
    connection.query('UPDATE users SET FirstName = ? , LastName = ? ,email = ? ,phone = ? ,comments = ? WHERE id = ?' ,[FirstName,LastName,email,phone,comments,req.params.id],(err, rows)=>{
        // when done with the connection release it 
        connection.release();
        if(!err)
        
        pool.getConnection((err,connection)=>{

            //if not connected
            if (err) throw err ;
            //if connection is successfully
            console.log('connected as ID' + connection.threadId);


    // Displaying the user after updating
    connection.query('SELECT * FROM users WHERE id = ?' ,[req.params.id],(err, rows)=>{
        // when done with the connection release it 

        connection.release();

        if(!err)
        res.render('edituser',{rows, alert:`${FirstName} has been Updated`});
        
        else{
            console.log(err)
    }
    console.log('the data from the usermanagement Db: \n', rows)

    });
     });
        else{
            console.log(err)
    }
    console.log('the data from the usermanagement Db: \n', rows)

    });
     });
    },

    // DELETING a user
    delete:(req,res)=>{
        pool.getConnection((err,connection)=>{

            //if not connected
            if (err) throw err ;
            //if connection is successfully
            console.log('connected as ID' + connection.threadId);


        connection.query('UPDATE users SET status = ? WHERE id = ?' ,['removed',req.params.id],(err, rows)=>{
            // when done with the connection release it 
    
            connection.release();
    
            if(!err)
            res.redirect('/' );
            else{
                console.log(err)
        }
        console.log('the data from the usermanagement Db: \n', rows)
    
        });
     });
    }           
}