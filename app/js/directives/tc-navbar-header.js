angular.module('TweetConversations')
.directive('tcNavbarHeader',function(){
	return {
		restrict: "E",
		templateUrl: '/templates/directives/tc-navbar-header.html'
	};
});