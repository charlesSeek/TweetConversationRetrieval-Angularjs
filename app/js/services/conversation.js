
angular.module("TweetConversations")
.factory('Conversation',['$http',function TopicFactory($http){
	return {
		getConversationsByTopic:function(topic){
			return $http({
				method:'GET',
				url: '/conversation/list/'+topic
			});
		},
		getAllConversations: function(){
			return $http({
				method: 'GET',
				url: '/conversation/all'
			});
		},
		getCompletedConversations: function(){
			return $http({
				method: 'GET',
				url: '/conversation/completion'
			});
		},
		getScheduledConversations: function(){
			return $http({
				method: 'GET',
				url: '/conversation/schedule'
			});
		},
		deleteOneConversation: function(id){
			return $http({
				method: 'DELETE',
				url: '/conversation/'+id
			})
		}
	}
}]);