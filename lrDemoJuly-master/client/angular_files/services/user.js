;(function () {
  'use strict'

  angular
    .module('myApp')
    .factory('userFactory', factory)

  function factory ($http) {
    var factory = {}
    factory.getSession = function (callback) {
      $http.get('/session')
        .then(function (returnData) {
          callback(returnData)
        })
    }

    factory.login = function (userInfo, callback) {
      $http.post('/login', userInfo)
        .then(function (returnData) {
          console.log(returnData)
          if (returnData.status) {
            callback(returnData)
          } else {
            callback(returnData)
          }
        })
    }
    factory.register = function (userInfo, callback) {
      $http.post('/register', userInfo)
        .then(function (returnData) {
          callback(returnData)
        })
    }
    factory.logout = function (callback) {
      $http.post('/logout')
        .then(function (returnData) {
          callback(returnData)
        })
    }
    return factory
  }
})()
