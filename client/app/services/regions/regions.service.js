var app = angular.module('Es6SonApp.services');

app.factory('RegionsService', function($resource) {
  return $resource('http://localhost:8000/api/regions');
});
