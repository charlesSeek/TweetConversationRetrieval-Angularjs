angular.module('TweetConversations')
.controller('AllRepliesController',function($scope,$routeParams,Reply){
	Reply.getAllReplies($routeParams.id)
	.success(function(data){
		$scope.replies = data.rows;
	})
	.error(function(data){
		$scope.error = data;
	});
});