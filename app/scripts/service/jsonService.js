angular.module('angularAppApp')
  .service('JsonService', function($http, $q) {
    this.readJson = function(fileName){
      var defer = $q.defer();
       $http
           .get(fileName) // making http get request to load the json file
           .then(function(response) {
             defer.resolve(response.data);
           });
         return defer.promise;
    }
});
