var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.resolve(__dirname, 'app/views');
app.use(express.static(staticPath));

app.listen(3000, function() {
  console.log('listening');
});