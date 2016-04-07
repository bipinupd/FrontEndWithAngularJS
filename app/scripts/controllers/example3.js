'use strict';

/**
 * @ngdoc function
 * @name filterApp.controller:Example3ctrlCtrl
 * @description
 * # Example3ctrlCtrl
 * Controller of the filterApp
 */
angular.module('angularAppApp')
  .controller('Example3Ctrl', function ($scope) {
    $scope.customers = [
       { name: 'Dave Jones', city: 'Phoenix' },
       { name: 'Jamie Riley', city: 'Atlanta' },
       { name: 'Heedy Wahlin', city: 'Chandler' },
       { name: 'Thomas Winter', city: 'Seattle' }
    ];
    $scope.add = function(){
      $scope.customers.push({ name: $scope.name , city: $scope.city });
      $scope.name = '';
      $scope.city = '';
    }
  });
