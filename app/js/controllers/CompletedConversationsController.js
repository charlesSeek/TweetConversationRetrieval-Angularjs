angular.module('TweetConversations')
.controller('CompletedConversationsController',function($http,$scope,Conversation){
	Conversation.getCompletedConversations()
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
		
		
	}
});