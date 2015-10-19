'use strict';

/**
 * @ngdoc function
 * @name mytodosApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the mytodosApp
 */
angular.module('mytodosApp')
  .controller('FooterCtrl', ['$scope', function($scope){
  	$scope.year = new Date().getFullYear();
  }]);
