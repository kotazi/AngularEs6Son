var beansServie = angular.module('Es6SonApp.services');

beansServie.factory('BeanService', function($resource) {
  return $resource('http://localhost:8000/api/beans/:id', { id: '@id' });
});