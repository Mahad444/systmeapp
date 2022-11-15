const express = require('express')
const app = express();
const  {engine} = require('express-handlebars');
const bodyParser = require('body-parser')
const mysql = require('mysql')
require('dotenv').config();


//Middleware for pasresr
//parse application/x-www-forms-urlencoded 
app.use(bodyParser.urlencoded({extended : false}));
//midlleware for json
app.use(bodyParser.json());

//the below code is for this app to require external folder like css,html,js e.t.c
app.use(express.static('public'));


{/*Template Engine for express-handlebars*/}
//changinging the long name(express-handlebars) into shortname extention i.e .hbs
app.engine('hbs' , engine({defaultLayout:'main.hbs'}));
// exphbs.engine('hbs',({extname:'.hbs'}))
app.set('view engine', 'hbs');
app.set('views','./views');

// Creating Our connection Pool
  const pool = mysql.createPool({
     connectionLimit : 100,
     host            :process.env.DB_HOST,
     user            :process.env.DB_USER,
     password        :process.env.DB_PASS,
     database        :process.env.DB_NAME,
  })

//   connecting to DB
 
pool.getConnection((err,connection)=>{
    //if not connected
    if (err) throw err ;
    //if connection is successfully
    console.log('connected as ID' + connection.threadId)
});




//routes
app.get('/',(req,res,)=>{
    res.render('home.hbs');
})

const port = process.env.PORT || 9500;

app.listen(port,()=>{
    console.log(`Now listening to http://localhost:${port}`)
})

