angular.module("TweetConversations")
.factory('Topic',['$http',function TopicFactory($http){
	return {
		all:function(){
			return $http({
				method:'GET',
				url: '/topics/list'
			});
		},
		createNewTopicSearch: function(search){
			return $http({
				method:'POST',
				url: '/topic/search/new',
				data: search
			})
		}
	}
}]);