// ここにひたすらAngularJSのコードを書いて行く
var appAdd = angular.module('Es6SonApp.add', ['ui.router']);

appAdd.config(function($stateProvider) {

  // メンバー登録
  $stateProvider.state('app.root.add', {
    url: '^/add',
    views: {
      'contents@app': {
        templateUrl: 'app/view/add.html',
        controllerAs: 'add',
        controller: 'AddController'
      }
    }
  })

});