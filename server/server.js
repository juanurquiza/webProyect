require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));//middleware
 
// parse application/json
app.use(bodyParser.json());//middleware
 
app.get('/', function (req, res) {
  res.json('Hello World');
})

app.get('/usuario', function (req, res) {
    res.json('Get Usuario');
  })

  
app.post('/usuario', function (req, res) {
    let body = req.body;

    if(body.nombre === undefined){
        res.status(400).json({
            ok:false,
            message: 'nombre incorrecto'
        })
    }
    else{
        res.json({ usuario:body});

    }
  })

app.put('/usuario/:id', function (req, res) {
    
    let identity = req.params.id;
    
    res.json({
        identity
    });
  })

  
app.delete('/usuario', function (req, res) {
    res.json('DELETE Usuario');
  })
 
app.listen(process.env.PORT, ()=>{
    console.log('lisen port: ',process.env.PORT)
})   