const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const db = require('./config/db');
const app = express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}))

mongoClient.connect(db.Url(), { useNewUrlParser: true }, (err, client)=>{
    if(err) return console.log(err)
    database= client.db('gastos-personales');
    app.listen(port, function(){
        console.log("here in"+ port);
    })
})


app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/test.html');
}),

app.post('/quotes', (req, res)=>{
    console.log(req.body);
    res.redirect('/')
})