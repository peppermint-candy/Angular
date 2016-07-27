(function() {
  angular
    .module('myApp')
    .controller('usersController', usersController)
  function usersController(userFactory) {
    var _this = this
    _this.user = null

    _this.register = function() {
      userFactory.register(_this.regInfo,
        function(factoryData) {
        if(factoryData.data.status) {
          console.log("Here is factory data", factoryData)
          _this.user = factoryData.data.userInfo
        }else{
          _this.errors = factoryData.data.errors
        }
      })
    }
  }
})();
