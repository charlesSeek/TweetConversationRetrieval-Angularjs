angular.module('TweetConversations')
.controller('AllTopicsController',function($scope,Topic){
	Topic.all()
	.success(function(data){
		$scope.topics = data.rows;
	})
	.error(function(data){
		$scope.error = data;
	});
	
});