angular.module("TweetConversations")
.factory('Reply',['$http',function ReplyFactory($http){
	return {
		getAllReplies:function(id){
			return $http({
				method:'GET',
				url: '/conversation/show/'+id
			});
		},
		retrieveAllReplies: function(id){
			return $http({
				method: 'GET',
				url: '/replies/'+id
			})
			
		}
	}
}]);