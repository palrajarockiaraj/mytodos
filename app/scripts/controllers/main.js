'use strict';

/**
 * @ngdoc function
 * @name mytodosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodosApp
 */
angular.module('mytodosApp')
  .controller('MainCtrl', ['$scope', function($scope){
  	$scope.todos = ['Item 1','Item 2','Item 3','Item 4','Item 5'];

  	// Add todo
  	$scope.addTodo = function () {
  		$scope.duplicate = false;
  		if($scope.todos.indexOf($scope.todo) === -1){
	  		$scope.todos.push($scope.todo);
  			$scope.todo = '';
  		} else {
  			$scope.duplicate = true;
  		}
  	};

  	// Remove todo
  	$scope.removeTodo = function (index) {
  		$scope.todos.splice(index, 1);
  	};

  }]);


