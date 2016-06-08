'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:ModelctrlCtrl
 * @description
 * # ModelctrlCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('ModelCtrl', ModelCtrl);

  function ModelCtrl($scope, ngTableParams, $filter, JsonService, $modal) {
    var vm = this;

    JsonService.readJson('users0.json').then(function (output){
        vm.jsonReadFromFile = output.users;

        vm.tableParamsFromJSONFile = new ngTableParams({
          count:   vm.jsonReadFromFile.length,
           sorting: {
               name: 'asc'
           }
       }, {
         counts: [],
         getData: function($defer, params) {
           vm.jsonReadFromFile = $filter('orderBy')( vm.jsonReadFromFile, params.orderBy());
           $defer.resolve(vm.jsonReadFromFile);
         }
       });
    });

    vm.setSelected = function(user) {
     vm.recordId = user.id;
     console.log('the row selected is ' + user.id );
     vm.modal.$promise.then(vm.modal.hide);
    };

    vm.hide = function(){
      vm.recordId = '';
      vm.modal.$promise.then(vm.modal.hide);
    };

    vm.modal = $modal({
           templateUrl: 'views/modal.html',
           scope: $scope,
           show: false
         });
    vm.showModal = function(){
      console.log('show modal called');
      vm.modal.$promise.then(vm.modal.show);
    };
  }
