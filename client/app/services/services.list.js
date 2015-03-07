var addServices = angular.module('Es6SonApp.services');

addServices.factory('BeanServices', function($resource)) {
  return $resource('http://localhost:8000/api/regions', null);
};