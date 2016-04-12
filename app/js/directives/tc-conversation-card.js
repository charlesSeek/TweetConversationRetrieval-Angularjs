angular.module('TweetConversations')
.directive('tcConversationCard',function(){
	return {
		replace: true,
		restrict: "E",
		scope: {
			userimage: "@",
			screenname: "@",
			id: "@",
			text: "@"
		},
		templateUrl:'/templates/directives/tc-conversation-card.html'
	};
});