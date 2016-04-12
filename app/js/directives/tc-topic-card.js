angular.module('TweetConversations')
.directive('tcTopicCard',function(){
	return {
		replace: true,
		restrict:"E",
		scope: {
			topic: "@",
			value:"@"
		},
		templateUrl:'/templates/directives/tc-topic-card.html'
	}
});