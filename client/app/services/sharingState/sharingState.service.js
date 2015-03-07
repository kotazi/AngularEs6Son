var app = angular.module('Es6SonApp.services');

app.factory('sharingState', function($resource) {
  var sharingState = {
    regions: null
  }
  return sharingState;
});

