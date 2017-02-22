(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'classifiedsList',
      })
      .state({
        name: 'postForm',
        url: '/newpost',
        component: 'postForm'
      })
      .state({
        name: 'editForm',
        url: '/:id',
        component: 'editForm'
      })
  }

}());
