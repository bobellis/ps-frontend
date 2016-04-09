var path = require('path');
var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

var staticPath = path.resolve(__dirname, 'app');
app.use(express.static(staticPath));

app.get('/', function(req, res){
    res.render('index.html');
});

app.listen(port, function() {
  console.log('listening');
});
