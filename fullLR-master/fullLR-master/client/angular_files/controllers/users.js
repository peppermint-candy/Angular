(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('usersController', Controller)

  function Controller (userFactory, $location) {
    var _this = this

    activate()

    function activate () {
      userFactory.getSessionUser(function (data) {
        console.log(data);
        if (data != null) {
          _this.user = data
        } else {
          $location.url('/')
        }
      })
    }
    _this.login = function () {
      _this.errors = []
      userFactory.login(_this.loginUser, function (data) {
        if (data.status) {
          _this.user = data.user
          $location.url('/success')
        } else {
          _this.errors = data.errors
        }
        _this.loginUser = {}
      })
    }
    _this.register = function () {
      _this.errors = []
      userFactory.register(_this.newUser, function (data) {
        if (data.status) {
          _this.user = data.user
          $location.url('/success')
        } else {
          _this.errors = data.errors
        }
        _this.newUser = {}
      })
    }
    _this.logout = function () {
      userFactory.logout(function () {
        $location.url('/')
      })
    }
  }
})()
