var myModule = angular.module('angularAppApp');
//define a value
myModule.value('clientId', 'a12345654321x');
//define a service
  myModule.service('person', [function() {
    this.first = 'John';
    this.last = 'Jones';
    this.name = function() {
      return this.first + ' ' + this.last;
    };
  }
  ]);

  //define a controller that injects the value
  myModule.controller('myController', ['$scope', '$interval', '$http', 'clientId', 'person',
    function  ($scope, $interval, $http, clientId, person){
      $scope.clientId = clientId;
      $scope.name = person.name();
      $scope.theTime = new Date().toLocaleTimeString();
      $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
      }, 1000);
      $scope.getData = function(){
        $http.get('learn.json').then(function(res){
          $scope.todos = res.data;
       });
      };
    }]);
