'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, $http, $filter ,ngTableParams, JsonService) {
    var vm = this;
    vm.ctrlName = 'TableController';
    vm.description = "Ng Table Demo"
    $scope.myValues = [{name: "Moroni", age: 10},
                     {name: "Nephi@31", age: 31},
                     {name: "Tiancum", age: 43},
                     {name: "DuplicateJacob", age: 27},
                     {name: "Nephi", age: 79},
                     {name: "OriginalEnos", age: 34},
                     {name: "Jacob", age: 26},
                     {name: "Enos", age: 34}];

     $scope.tableParams = new ngTableParams({
        count:  $scope.myValues.length,
         sorting: {
             name: 'asc'
         }
     }, {
     //From Stackoverflow:
     //$defer.resolve($filter('orderBy')($scope.myValues, params.orderBy()));
     //will create a new sorted array but will not change $scope.myValues.
     //So either, you set $scope.myValues to the sorted array each time:
     //$scope.myValues = $filter('orderBy')($scope.myValues, params.orderBy());
     //$defer.resolve($scope.myValues);
     //Or use $data in ng-repeatinstead of myValues:
     //<tr ng-repeat="user in $data">
      counts: [],
       getData: function($defer, params) {
         $scope.myValues = $filter('orderBy')($scope.myValues, params.orderBy());
         $defer.resolve($scope.myValues);
       }
   });

   JsonService.readJson("users.json").then(function (output){
       $scope.jsonReadFromFile = output.users;

       $scope.tableParamsFromJSONFile = new ngTableParams({
         count:   $scope.jsonReadFromFile.length,
          sorting: {
              name: 'asc'
          }
      }, {
        counts: [],
        getData: function($defer, params) {
          $scope.jsonReadFromFile = $filter('orderBy')( $scope.jsonReadFromFile, params.orderBy());
          $defer.resolve($scope.jsonReadFromFile);
        }
      });
  });


});
