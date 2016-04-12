var express = require('express');

var app = express();

require('./expressConfig')(app,express);


app.get('/',function(req,res){
	res.sendFile('index.html',{root:__dirname+'/../views'});
})
require('./routes/topic')(app);
require('./routes/conversation')(app);
require('./routes/reply')(app);


module.exports = app;