'use strict';

angular.module('shoppinglistappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shoppinglist', {
        url: '/shoppinglist',
        templateUrl: 'app/shoppinglist/shoppinglist.html',
        controller: 'ShoppinglistCtrl',
        authenticate: true
      })
      .state('viewshoppinglist', {
        url: '/viewshoppinglist',
        templateUrl: 'app/shoppinglist/viewshoppinglist.html',
        controller: 'ShoppinglistCtrl',
        authenticate: true
      });
  });