const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const dataneeded= require('./data.json')
//the port which is used for the connectivity


const port = process.env.PORT ||3000;
const htmlpaths=path.join(__dirname);

// app.use(bodyParser.raw());

app.use(express.static(htmlpaths));

app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.set('views',path.join(__dirname))

app.get('/index',(req,res)=>{
    res.render('index')
})


app.post('/index',(req,res)=>{
    console.log(req.body)
console.log('working')
})


//creating server 
app.listen(port,(err)=>{
    console.log('listening on....')
});