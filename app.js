const express = require('express')
const app = express();
const  {engine} = require('express-handlebars');
const bodyParser = require('body-parser')
require('dotenv').config();
// import { Engine } from 'express-handlebars/types';
// const engine = require('express-handlebars/types')






//Middleware for pasresr
//parse application/x-www-forms-urlencoded
app.use(bodyParser.urlencoded({extended : false}))
//midlleware for json
app.use(bodyParser.json())

//the below code is for this app to require external folder like css,html,js e.t.c
app.use(express.static('public'))


{/*Template Engine for express-handlebars*/}
//chnginging the long name(express-handlebars) into shortname extention i.e .hbs
app.engine('hbs' , engine({extname:'.hbs'}))
app.set('view engine', 'hbs')
app.set('views','/views')


//routes
app.get('/',(req,res,next)=>{
    res.render('home',{layout : false})


})


const port = process.env.PORT || 9500;

app.listen(port,()=>{
    console.log(`Now listening to http://localhost:${port}`)
})

