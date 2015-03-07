var app = angular.module('Es6SonApp.filters');

app.filter('regionName', function($http) {
  var region = [];
  $http.get('http://localhost:8000/api/regions')
    .success(function(data) {
      region = data;
    });
  return function(input) {
    var ret = '';
    angular.forEach(region, function(v) {
      if (v.id === input) ret = v.name;
    });
    return ret;
  };
});
