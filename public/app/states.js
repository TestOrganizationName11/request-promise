'use strict'
angular
  .module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state({
        name: 'startPage',
        url: '/',
        templateUrl: './app/startPage/startPage.template.html',
        controller: 'StartPageController',
        controllerAs: 'StartPage',       
      })
  });