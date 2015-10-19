'use strict';

/**
 * @ngdoc overview
 * @name mytodosApp
 * @description
 * # mytodosApp
 *
 * Main module of the application.
 */
angular
  .module('mytodosApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider',function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(['$routeProvider',function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });    
  }]);