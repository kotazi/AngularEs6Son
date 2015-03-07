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
});
