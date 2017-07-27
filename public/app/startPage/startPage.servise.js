'use strict'

angular
  .module('app')
  .factory('StartPageServise', ['$resource', function ($resource){
    return $resource('github/:username/:action', null,
    {
      'update': { method: 'PUT' }
    });
  }])
