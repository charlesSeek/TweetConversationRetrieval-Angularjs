angular.module('TweetConversations')
.directive('tcReplyCard',function(){
	return {
		replace: true,
		restrict:"E",
		scope: {
			screenname: "@",
			userimage:"@",
			text:"@",
			created:"@"

		},
		templateUrl:'/templates/directives/tc-reply-card.html'
	}
});