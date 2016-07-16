var app = angular.module('app', []);

		app.factory('productFactory', function(){

			var products = [
			{name: 'Apple', price: '1.29', quantity: '20'}];
			var factory = {};

			factory.getProducts = function(callback) {
				callback(products);
			}

			factory.create = function(data, callback) {
				data.quantity = 50;
				products.push(data);
				callback();
			}

			factory.delete = function(id, callback) {
				products.splice(id, 1);
				callback();
			}

			factory.buy = function(id, callback) {
				products[id].quantity --
				callback();

			}

			return factory;
		});

		app.controller('productController', ['$scope', 'productFactory', 
			function ($scope, productFactory) {

				productFactory.getProducts(function(data) {
						$scope.products = data;
						$scope.product = {};
					});

				$scope.index = function() {
					productFactory.getProducts(function(data) {
						$scope.products = data;
						$scope.product = {};
					});
				}

				$scope.create = function() {
					productFactory.create($scope.product, $scope.index);
				}

				$scope.delete = function(id) {
					productFactory.delete(id, $scope.index);
				}
			}
		]);

		app.controller('orderController', ['$scope', 'productFactory',
			function($scope, productFactory) {

				productFactory.getProducts(function(data) {
						$scope.products = data;
						$scope.product = {};
					});

				$scope.index = function() {
					productFactory.getProducts(function(data) {
						$scope.products = data;
						$scope.product = {};
					});
				}

				$scope.buy = function(id) {
					productFactory.buy(id ,$scope.index);
				}

			}
			])
