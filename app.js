const express = require('express')
const connecttodb = require('./config/db.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

connecttodb();

const userroutes = require("./routes/userroutes.js")

app.use("/" , userroutes)

app.get('/', function (req, res) {
  res.send('<h1>Hello Vandy</h1>')
})

//json responce........
app.get('/json',(req , res)=>{
    res.json({
        success: true,
        vandy: 'she is my life',
    })
})

module.exports = app;