import EditController from './edit.controller';

// ここにひたすらAngularJSのコードを書いて行く
var addEdit = angular.module('Es6SonApp.edit', ['ui.router']);

app.controller('EditController', ['$state', '$stateParams', 'BeanService', 'RegionsService', EditController]);

addEdit.config(function($stateProvider) {

  $stateProvider.state('app.root.edit', {
      url: '^/edit/:id',
      views: {
        'contents@app': {
          templateUrl: 'app/edit/edit.html',
          controllerAs: 'edit',
          controller: 'EditController'
        }
      }
    });

});
