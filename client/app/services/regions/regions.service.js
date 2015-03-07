var app = angular.module('Es6SonApp.services');

app.factory('RegionsService', function($http) {
  var RegionsService = function() {
    return $http.get('http://localhost:8000/api/regions');
  };
  return RegionsService;
});