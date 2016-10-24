(function () {
  'use strict';

  angular.module('common')
  .service ('SignUpStorage', ['$window', function ($window) {
    var service = this;

    service.storeObject = function (key, object) {
      $window.SignUpStorage[key] = JSON.stringify(object);
    };

    service.getObject = function (key, defaultValue) {
      return JSON.parse($window.SignUpStorage[key] || defaultValue);
    };

    service.removeRecord = function (key) {
      $window.SignUpStorage.removeItem(key);
    };

  }]);

})();
