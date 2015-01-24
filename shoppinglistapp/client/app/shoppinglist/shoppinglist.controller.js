'use strict';

angular.module('shoppinglistappApp')
  .controller('ShoppinglistCtrl', function ($scope, $location, shoppinglistservice) {
    

   $scope.createList = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        shoppinglistservice.createList({
          name: $scope.user.name,
        })
        
      }
    };

   var id = $location.url().split('/')[1];
   if(id === 'viewshoppinglist') {
      shoppinglistservice.viewList()
	     .success(function(data) {
		  	console.log("Success");
		  	$scope.completeShoppingList = data;
		  }).error(function(data) {
		  	console.log("error");
		  });
   };

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
