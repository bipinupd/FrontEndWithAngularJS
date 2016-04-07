var app = angular.module('angularAppApp');
app.directive('customACE', function () {
   return {
   restrict: 'ACE', // A=attribute, C=class, E=element
   template: 'This is static content !'
   };
});
app.directive('customM', function () {
   return {
   replace: true,
   restrict: 'M', // M=comment
   template: '<div>This is a static content in comment</div>'
   };
});
