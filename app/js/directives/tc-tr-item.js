angular.module('TweetConversations')
.directive('tcTrItem',function(){
	return {
		replace: true,
		restrict:"E",
		scope: {
			topic: "@",
			id:"@",
			originator: "@",
			created: "@",
			status: "@"
		},
		templateUrl:'/templates/directives/tc-tr-item.html'
	}
});