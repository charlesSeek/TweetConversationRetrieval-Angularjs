angular.module('TweetConversations')
.controller('TopicSearchController',['$scope','$http','Topic',function($scope,$http,Topic){
	$scope.search = {
		topic:'',
		limits:''
	};
	$scope.reset = function(){
		$scope.search = {
			topic:'',
			limits:''
		};
	};
	$scope.submit = function(){
		Topic.createNewTopicSearch($scope.search)
		.success(function(data){
			
		})
		.error(function(data){
			alert('Meets error:'+data);
		})
	}
}]);