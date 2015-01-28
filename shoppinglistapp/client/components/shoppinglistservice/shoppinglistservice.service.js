'use strict';

angular.module('shoppinglistappApp')
  .service('shoppinglistservice', function ($http, $log) {
    // AngularJS will instantiate a singleton by calling "new" on this function
   return {

	    /*Create shopping list*/
	   	createList: function(shoppingList) {
	       $log.debug("createList");
	        var request = $http.post('/v1/api/shoppinglists', shoppingList);
	        return request;
	    },

        viewList: function() {
	        $log.debug("viewList");
	        var request = $http.get('/v1/api/shoppinglists');
	        return request;
	    },

	    deleteList: function(id) {
	        $log.debug("deleteList");
	        var request = $http.delete('/v1/api/shoppinglists/'+id);
	        return request;
	    },

	    deactivateList: function(shopList) {
	        $log.debug("deactivateList");
	        shopList.active = false;
	        var request = $http.patch('/v1/api/shoppinglists/'+shopList.id, shopList);
	        return request;
	    }
	   
   };

  });
