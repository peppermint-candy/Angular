var app = angular.module('app', ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when("/players" , {
			templateUrl: "client/partials/players.html"

		})
		.when("/teams" , {
			templateUrl: "partials/teams.html"

		})
		.when("/associates" , {
			templateUrl: "partials/associates.html"

		})

		.otherwise({
			redirectTo: "/players"
		});
})


app.factory("playersFactory", [function() {
	var factory = {};

	var players = [
	{name: "Richard Sherman"},
	{name: "Russell Wilson"},
	{name: "Lebron James"}
	];

	factory.index = function(callback) {
		callback(players);
	}

	factory.create = function(player) {
		players.push(player);
	}

	factory.delete = function($index) {
		players.splice($index, 1)
	}

	return factory;

}])

app.factory("teamsFactory" , [function() {
	var factory = {};

	var teams = [
	{name: "Seahawks"},
	{name: "Cavalier"},
	];

	factory.index = function(callback) {
		callback(teams);
	}

	factory.create = function(team) {
		teams.push(team);
	}

	factory.delete = function($index) {
		teams.splice($index, 1);
	}

	return factory;
}])


app.controller("playersController", ['$scope', 'playersFactory', 
	function($scope,playersFactory) {

		function showPlayers(data) {
			$scope.players = data;
			$scope.player = {};
		}

		$scope.players = [];

		playersFactory.index(showPlayers);

		$scope.create = function() {
			playersFactory.create($scope.newPlayer)
			$scope.newPlayer = {};
		}

		$scope.delete = function($index) {
			playersFactory.delete($index);
		}

	}])

app.controller("teamsController", ['$scope', 'teamsFactory',
	function($scope,teamsFactory) {

		function showTeams(data) {
			$scope.teams = data;
			$scope.team = {};
		}

		$scope.teams = [];

		teamsFactory.index(showTeams)

		$scope.create = function() {
			teamsFactory.create($scope.newTeam)
			$scope.newTeam = {};
		}

		$scope.delete = function($index) {
			teamsFactory.delete($index);
		}

	}])

app.controller("associatesController", ['$scope', 'playersFactory','teamsFactory', function($scope, playersFactory, teamsFactory) {

	$scope.teams = [];
	$scope.players = [];

	playersFactory.index(players);
	teamsFactory.index(teams);

}])