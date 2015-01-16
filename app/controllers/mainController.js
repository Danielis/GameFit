angular.module('main', ['ui.bootstrap'])
.controller('MainController', function($scope) {
	$scope.myInterval = 5000;
	$scope.slides = [
		{
			image: 'images/main2.jpg',
			title: 'Personalize your game',
			text: 'We provide you the tools to encourage players to be active and change how the world views gaming.',
		},
		{
			image: 'images/main1.jpg',
			title: 'Remove the hassle',
			text: 'We handle the devices and stay up to date while you focus on your game.'
		},
		{
			image: 'images/main3.jpg',
			title: 'Simplify the Data',
			text: 'We filter, analyze, and quantify the data to give you accurate representations of your gamers.'
		},
		{
			image: 'images/main4.jpg',
			title: 'Easy to Integrate',
			text: 'We understand how annoying some APIs can be so we make sure to keep it as simple as possible.'
		},
	];
});