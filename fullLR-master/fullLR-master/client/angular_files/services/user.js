;(function () {
  'use strict'

  angular
    .module('myApp')
    .factory('userFactory', factory)

  function factory ($http) {
    var service = {}
    var user = null
    function getSession (callback) {
      $http.get('/session')
        .then(function (res) {
          console.log(res)
          if (res.data.status) {
            user = res.data.user
            callback(user)
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
    service.getSessionUser = function (callback) {
      getSession(callback)
    }
    service.logout = function (callback) {
      $http.get('/logout')
        .then(function (res) {
          if (res.data.status) {
            user = null
          }
          callback()
        })
        .catch(function (err) {
          console.log(err)
        })
    }
    service.login = function (info, callback) {
      $http.post('/login', info)
        .then(function (res) {
          if (res.data.status) {
            user = res.data.session
          }
          callback(res.data)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
    service.register = function (info, callback) {
      $http.post('/register', info)
        .then(function (res) {
          console.log(res)
          if (res.data.status) {
            user = res.data.session
          }
          callback(res.data)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
    return service
  }
})()
