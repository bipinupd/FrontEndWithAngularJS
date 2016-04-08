'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngTable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtl'
      })
      .when('/example1', {
        templateUrl: 'views/example1.html'
      })
      .when('/example2', {
        templateUrl: 'views/example2.html'
      })
      .when('/example3', {
        templateUrl: 'views/example3.html',
        controller: 'Example3Ctrl'
      })
      .when('/example4', {
        templateUrl: 'views/example4.html',
        controller: 'myController',
        controllerAs: 'example4Ctl'
      })
      .when('/example5', {
        templateUrl: 'views/example5.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
