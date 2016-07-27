(function() {
  angular
    .module('myApp')
    .factory('userFactory', factory)
  function factory($http) {
    var factory = {};

    factory.login = function(userInfo, callback) {
      $http.post('/login', userInfo)
      .then(function(returnData) {
        if(returnData.status) {
          callback(returnData.userInfo)
        }else{
          callback(returnData.errors)
        }
      })
    }

    factory.register = function(userInfo, callback) {
      $http.post('/register', userInfo)
        .then(function(returnData) {
          console.log('In register FACTORY', returnData)
          callback(returnData)
        })
      }


    factory.logout = function() {

    }

    return factory
  }
})();
