var http = require('http');
module.exports = function(app){
	app.get('/conversation/list/:topic',function(req,res){
		var topic = req.params.topic;
		var url = "http://localhost:5984/tweets/_design/tweets/_view/topicConversation?key=\""+topic+"\"";
		http.get(url,function(response){
			var body ='';
			response.on('data',function(chunk){
				body += chunk;
			});
			response.on('error',function(error){
				console.log(error);
				res.json({error:error});
			});
			response.on('end',function(){
				var conversations = JSON.parse(body);
				res.json(conversations);
			})
		})
	});
	app.get('/conversation/show/:id',function(req,res){
		var id = req.params.id;
		var url = "http://localhost:5984/tweets/_design/tweets/_view/allRepliesOfOneConversation?key=\""+id+"\"";
		http.get(url,function(response){
			var body = '';
			response.on('data',function(chunk){
				body += chunk;
			});
			response.on('error',function(error){
				console.log(error);
				res.json({error:error});
			});
			response.on('end',function(){
				var replies = JSON.parse(body);
				res.json(replies);
			})
		})
	});
	app.get('/conversation/all',function(req,res){
		var url = "http://localhost:5984/tweets/_design/tweets/_view/allConversations?descending=true";
		http.get(url,function(response){
			var body = '';
			response.on('data',function(chunk){
				body += chunk;
			});
			response.on('error',function(error){
				console.log(error);
				res.json({error:error});
			});
			response.on('end',function(){
				var conversations = JSON.parse(body);
				res.json(conversations);
			})
		})
	});
	app.get('/conversation/completion',function(req,res){
		var url = "http://localhost:5984/tweets/_design/tweets/_view/completedConversations?descending=true";
		http.get(url,function(response){
			var body = '';
			response.on('data',function(chunk){
				body += chunk;
			});
			response.on('error',function(error){
				console.log(error);
				res.json({error:error});
			});
			response.on('end',function(){
				var conversations = JSON.parse(body);
				res.json(conversations);
			})
		})
	});
	app.get('/conversation/schedule',function(req,res){
		var url = "http://localhost:5984/tweets/_design/tweets/_view/scheduleConversations?descending=true";
		http.get(url,function(response){
			var body = '';
			response.on('data',function(chunk){
				body += chunk;
			});
			response.on('error',function(error){
				console.log(error);
				res.json({error:error});
			});
			response.on('end',function(){
				var conversations = JSON.parse(body);
				res.json(conversations);
			})
		})
	});
	app.delete('/conversation/:id',function(req,res){
		var id = req.params.id;
		var url = "http://localhost:5984/tweets/"+id;
		http.get(url,function(response){
			var body = '';
			response.on('data',function(chunk){
				body += chunk;
			});
			response.on('error',function(error){
				console.log('deleteById get'+docid+":"+error);
				res.json({error:error});
			})
			response.on('end',function(){
				var tweet = JSON.parse(body);
				var _rev = tweet._rev;
				console.log('_rev:',_rev);
				var options = {
					protocol: 'http:',
					host: 'localhost',
					port: 5984,
					path: '/tweets/'+id+'?rev='+_rev,
					method: 'DELETE'
				}
				console.log(options);
				var request = http.request(options,function(response){
					var body = '';
					response.on('data',function(chunk){
						body += chunk;
					});
					response.on('error',function(error){
						console.log('deleteById '+docid+":"+error);
						res.json({error:error});
					});
					response.on('end',function(){
						var result = JSON.parse(body);
						res.json(result);
					});
				});
				request.on("error",function(error){
					console.log('deleteById '+docid+":"+error);
					res.json({error:error});
				});
				request.end();
			});
		});
	});
}