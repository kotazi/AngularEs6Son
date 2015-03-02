import angular from 'angular';
import 'angular-ui-router';

// ここにひたすらAngularJSのコードを書いて行く
var app = angular.module('Es6SonApp', ['ui.router']);

app.config(function($locationProvider, $httpProvider, $urlRouterProvider, $stateProvider){

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/list');

    $stateProvider.state('app', {
        abstract: true,
        url: '/#',
        template: '<div ui-view="header"></div>' +
                  '<div ui-view="contents"></div>' +
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
          templateUrl: 'app/view/header.html'
        }
      }
    })

    // ○○一覧
    .state('app.root.list', {
      url: '^/list',
      views: {
        'contents@app': {
          templateUrl: 'app/view/list.html',
          controllerAs: 'list',
          controller: 'ListController'
        }
      }
    })

    // ○○登録
    .state('app.root.add', {
      url: '^/add',
      views: {
        'contents@app': {
          templateUrl: 'app/view/add.html',
          controllerAs: 'add',
          controller: 'AddController'
        }
      }
    })

    // ○○編集
    .state('app.root.edit', {
      url: '^/edit',
      views: {
        'contents@app': {
          templateUrl: 'app/view/edit.html',
          controllerAs: 'edit',
          controller: 'EditController'
        }
      }
    })
});

app.controller('ListController', function () {
    this.hello = 'AngularJS';
  });
app.controller('AddController', function () {
    this.hello = 'AngularJS';
  });
app.controller('EditController', function () {
    this.hello = 'AngularJS';
  });