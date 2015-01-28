'use strict';

angular.module('shoppinglistappApp')
  .service('shoppinglistservice', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
   return {

	    /*Create shopping list*/
	   	createList: function(shoppingList) {
	        console.log("createList");

	        var request = $http.post('/v1/api/shoppinglists', shoppingList);
	        return request;
	    },

        viewList: function() {
	        console.log("viewList");

	        var request = $http.get('/v1/api/shoppinglists');
	        return request;
	    }
	   
   };

  });
