'use strict';

eventsApp.controller('EventController',
	function EventController($scope){
		$scope.sortorder = 'name';
		$scope.event = {
			name : 'Angular Boot Camp',
			date : '1399782015626',
			time : '10:30 am', 
			location: {
				address		: 'Google Headquarters',
				city 		: 'Mountain View',
				province 	: 'CA'

			},
			imageUrl : '/img/angularjs-logo.png', 
			sessions : [
				{
					name 		: 'Lorem ipsum dolor sit amet.',
					creatorName : 'John Smith',
					duration 	: 1,
					level 		: 'Advanced',
					abstract	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, incidunt, voluptatem! Deleniti, ratione fugit beatae!',
					upVoteCount : 0
				},
				{
					name : 'Lorem ipsum dolor.',
					creatorName : 'John Dow',
					duration 	: 2,
					level 		: 'Introductory',
					abstract	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, incidunt, voluptatem! Deleniti, ratione fugit beatae!',
					upVoteCount : 0

				},
				{
					name : 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
					creatorName : 'Jane Doe',
					duration 	: 4,
					level 		: 'Intermediate',
					abstract	: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, incidunt, voluptatem! Deleniti, ratione fugit beatae!',
					upVoteCount : 0
				}
			]
		}
		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		};
		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		};

	}

);