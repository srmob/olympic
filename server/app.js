'strict'

var express = require('express');

var app = express();

app.use(express.static(__dirname+"/../client"));


app.get('/sports',function(req,res){
    res.json(["Weighlifting",'Cycling']);
})

var port = process.env.PORT || 8181;
app.listen(port);
console.log(' MEAN Stack - express server running on port'+port);

//app.listen(port,() => console.log('MEAN Stack - express server running on port%s'+port));