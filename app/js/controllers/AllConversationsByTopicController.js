angular.module('TweetConversations')
.controller('AllConversationsByTopicController',function($scope,$routeParams,Conversation){
	Conversation.getConversationsByTopic($routeParams.topic)
	.success(function(data){
		$scope.conversations = data.rows;
	})
	.error(function(data){
		$scope.error = data;
	});
});