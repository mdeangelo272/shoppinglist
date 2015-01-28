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
          name: $scope.shopList.listName,
        }).success(function(data) {
		  	console.log("Success");
		  	$scope.completeShoppingList.push(data);
		  	$scope.shopList.listName = "";
		  }).error(function(data) {
		  	console.log("error");
		});
        
      }
    };

    $scope.deleteList = function(id, position) {
        shoppinglistservice.deleteList(id).success(function(data) {
		  	console.log("Success" + id);
		  	$scope.completeShoppingList.splice(position, 1);
		  }).error(function(data) {
		  	console.log("error");
		});
        
    };

    $scope.deactiveList = function(id, position) {
    	var shopList = {
          id: id,
          active: false
        };

        shoppinglistservice.deactivateList(shopList).success(function(data) {
		  	console.log("Success" + id);
		  	$scope.completeShoppingList[position].active = false;
		  }).error(function(data) {
		  	console.log("error");
		});
        
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
