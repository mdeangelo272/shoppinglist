'use strict';

angular.module('shoppinglistappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sidebar', {
        url: '/sidebar',
        templateUrl: 'components/sidebar/sidebar.html',
        controller: 'SidebarCtrl'
      });
  });