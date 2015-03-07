// ここにひたすらAngularJSのコードを書いて行く
var app = angular.module('Es6SonApp', ['ui.router', 'ngResource', 'Es6SonApp.edit', 'Es6SonApp.add', 'Es6SonApp.list']);

app.config(function($locationProvider, $httpProvider, $urlRouterProvider, $stateProvider) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/list');

  $stateProvider.state('app', {
    abstract: true,
    url: '/#',
    template: '<div ui-view="header"></div>' +
      '<div ui-view="contents" class="main"></div>' +
      '<div ui-view="footer"></div>'
  })

  // アプリルート
  .state('app.root', {
    url: '^/',
    abstract: true,
    views: {
      'header@app': {
        templateUrl: 'app/view/header.html'
      },
      'contents@app': {
        templateUrl: 'app/view/home.html'
      },
      'footer@app': {
        templateUrl: 'app/view/footer.html'
      }
    }
  });

});
