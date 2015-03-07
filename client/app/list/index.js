// ここにひたすらAngularJSのコードを書いて行く
var addList = angular.module('Es6SonApp.list', ['ui.router']);

addList.config(function($stateProvider) {

  $stateProvider.state('app.root.list', {
      url: '^/list',
      views: {
        'contents@app': {
          templateUrl: 'app/list/list.html',
          controllerAs: 'list',
          controller: 'ListController'
        }
      }
    });

})
.filter('regionName', function($http) {
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
