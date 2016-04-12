angular.module('TweetConversations')
.controller('ScheduledConversationsController',function($http,$scope,Conversation){
	Conversation.getScheduledConversations()
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