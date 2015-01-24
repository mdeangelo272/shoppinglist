'use strict';

angular.module('shoppinglistappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shoppinglist', {
        url: '/shoppinglist',
        templateUrl: 'app/shoppinglist/shoppinglist.html',
        controller: 'ShoppinglistCtrl'
      });
  });