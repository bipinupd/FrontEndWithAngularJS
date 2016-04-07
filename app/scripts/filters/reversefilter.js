'use strict';

/**
 * @ngdoc filter
 * @name filterApp.filter:reverseFilter
 * @function
 * @description
 * # reverseFilter
 * Filter in the filterApp.
 */
angular.module('angularAppApp')
  .filter('reverseFilter', function () {
    return function (input) {
      input = input || '';
      var out = "";
      for (var i = 0; i < input.length; i++) {
        out = input.charAt(i) + out;
      }
      return out;
    };
  });
