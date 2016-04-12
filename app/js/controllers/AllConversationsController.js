angular.module('TweetConversations')
.controller('AllConversationsController',function($http,$scope,Conversation,Reply){
	Conversation.getAllConversations()
	.success(function(data){
		$scope.conversations = data.rows;
	})
	.error(function(data){
		$scope.error = data;
	});
	$scope.delete = function(id){
		Conversation.deleteOneConversation(id)
		.success(function(data){
			if (data.ok == true){
				$('#tr-'+id).remove();
			} else {
				alert(data);
			}
		})
		.error(function(data){
			alert("Conversation Delete fail");
		})
	};
	$scope.getAllReplies = function(id){
		Reply.retrieveAllReplies(id)
		.success(function(data){
			alert("retrieve "+id+" replies successfully");
		})
		.error(function(data){
			alert("retrieve "+id+" replies failed");
		})
	}
});