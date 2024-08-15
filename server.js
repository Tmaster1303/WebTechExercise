const  express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('GET Hello, World!');
})

app.post('/hello', function(req, res){
    res.send('POST Hello, World!');
})

app.listen(3000, function(req, res){
    console.log('3000');
})