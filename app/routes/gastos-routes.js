const express   = require('express');
const path      = require('path');
const bodyParser = require('body-parser');

const app= express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

    module.exports = function (app, db) {
    app.get('/', (req, res) => {
        console.log("GET /");
        console.log(path.join(__dirname, '../../public/html'));
        //console.log(path.dirname())
        var options = {
            root: path.join(__dirname, '../../public/html'),
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };

        res.sendFile('test.html', options);
    });

    app.get('/submit', (req,res)=>{
        console.log("submit/");
        var dbo=db.db("gastos-personales");
        var myObj={nombre:"hola", monto:"50", categoría:"comida", descripcion:"nada"};
        dbo.collection("gastos").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });

    app.get('/borrar', (req,res)=>{
        console.log("submit/");
        var dbo=db.db("gastos-personales");
        var myObj={nombre:"hola", monto:"50", categoría:"comida", descripcion:"nada"};
        dbo.collection("gastos").deleteOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document deleted");
            db.close();
        });
    })
