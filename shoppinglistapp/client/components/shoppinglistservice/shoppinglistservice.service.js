'use strict';

angular.module('shoppinglistappApp')
  .service('shoppinglistservice', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
   return {

	    /*Create shopping list*/
	   	createList: function(shoppingList) {
	        console.log("createList");

	        $http.post('/v1/api/shoppinglists', shoppingList).success(function(shoppingList) {
			    return shoppingList;
	        });
	    },

        viewList: function() {
	        console.log("viewList");

	        var request = $http.get('/v1/api/shoppinglists');
	        return request;
	    }
	   
   };

  });
