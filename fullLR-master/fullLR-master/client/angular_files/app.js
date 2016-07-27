(function () {
  'use strict'

  angular
    .module('myApp', ['ngRoute'])
    .config(config)
  function config ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../partials/loginandregister.html'
      })
      .when('/success', {
        templateUrl: '../partials/success.html'
      })
      .otherwise({
        redirectTo: '/'
      })
  }
})()
