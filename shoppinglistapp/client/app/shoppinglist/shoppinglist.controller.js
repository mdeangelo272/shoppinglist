'use strict';

angular.module('shoppinglistappApp')
  .controller('ShoppinglistCtrl', function ($scope, $location, shoppinglistservice) {
    

   shoppinglistservice.viewList()
	     .success(function(data) {
		  	console.log("Success");
		  	$scope.completeShoppingList = data;
		  }).error(function(data) {
		  	console.log("error");
		  });

   $scope.createList = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        shoppinglistservice.createList({
          name: $scope.user.name,
        }).success(function(data) {
		  	console.log("Success");
		  	$scope.completeShoppingList.push(data);
		  }).error(function(data) {
		  	console.log("error");
		});
        
      }
    };

   /*var id = $location.url().split('/')[1];
   if(id === 'viewshoppinglist') {
      shoppinglistservice.viewList()
	     .success(function(data) {
		  	console.log("Success");
		  	$scope.completeShoppingList = data;
		  }).error(function(data) {
		  	console.log("error");
		  });
   };*/

    $scope.viewList = function(form) {
	  shoppinglistservice.viewList()
	     .success(function(data) {
		  	console.log("Success");
		  	$scope.completeShoppingList = data;
		  }).error(function(data) {
		  	console.log("error");
		  });
    };

	$scope.redirectTo = function(path) {
	$location.path(path);
	}

  });
