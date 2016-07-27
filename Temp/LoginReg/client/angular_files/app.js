(function() {
  angular
    .module('myApp', ['ngRoute'])
    .config(config)
  function config($routeProvider) {
    $routeProvider
    .when('/' , {
      templateUrl: 'angular_files/partials/index.html'
    })

    .when('/success' , {
      templateUrl: 'angular_files/partials/success.html'
    })

    .otherwise({
      redirectTo: '/'
    })
  }
})();
