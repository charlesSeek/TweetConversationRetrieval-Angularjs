angular.module('TweetConversations').config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/',{
			redirectTo: '/topics'
		})
		.when('/topics',{
			templateUrl:'/templates/pages/index.html',
			controller: 'AllTopicsController'
		})
		.when('/conversation/list/:topic',{
			templateUrl:'/templates/pages/conversations-list-topic.html',
			controller: 'AllConversationsByTopicController'
		})
		.when('/conversation/show/:id',{
			templateUrl: '/templates/pages/replies-by-id.html',
			controller: 'AllRepliesController'
		})
		.when('/topic/search',{
			templateUrl: '/templates/pages/topic-search-form.html',
			controller: 'TopicSearchController'
		})
		.when('/conversation/all',{
			templateUrl: '/templates/pages/all-conversations.html',
			controller: 'AllConversationsController'
		})
		.when('/conversation/completion',{
			templateUrl: '/templates/pages/completed-conversations.html',
			controller: 'CompletedConversationsController'
		})
		.when('/conversation/schedule',{
			templateUrl: '/templates/pages/scheduled-conversations.html',
			controller: 'ScheduledConversationsController'
		})
		.otherwise({redirectTo: '/'});

}]);