var http = require('http');
module.exports = function(app){
	app.get('/topics/list',function(req,res){
		var url = 'http://localhost:5984/tweets/_design/tweets/_view/topicCategory?group_level=1';
		http.get(url,function(response){
			var body='';
			response.on('data',function(chunk){
				body+=chunk;
			});
			response.on('error',function(error){
				console.log(error);
				res.json({error:error});
			})
			response.on('end',function(){
				var topics = JSON.parse(body);
				res.json(topics);
			})
		});
	});
};