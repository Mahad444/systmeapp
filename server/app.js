const express = require('express')
const dotenv = require ('dotenv')
const cors = require ('cors')
dotenv.config()



const app = express();
app.use (express.json());
app.use(cors());
app.use(express.urlencoded({extended : false}))

 
const db = require ('../server/appservices')

// CREATE
app.post('/insert',(req,res)=>{
    console.log("Good to Go")
})



// READ
app.get('/getall',(req,res)=>{
    res.json({
        success :true
    })
})
// UPDATE
// DELETE

app.listen(5000,()=>{
    console.log("Now Listening to http://localhost:5000")
})
