angular.module('Es6SonApp.components').directive('amountLabel', function($log) {

  return {
    templateUrl: 'app/components/amountLabel/amountLabel.html',
    restrict: 'EA',
    scope: {
      amount: '='
    },
    link: link
  };

  function link(scope, element, attrs) {

    if (scope.amount > 1000) {
      scope.class = 'text-info';
    } else if (scope.amount <= 1000 && scope.amount > 500) {
      scope.class = 'text-success';
    } else if (scope.amount <= 500) {
      scope.class = 'text-danger';
    }

  }

});
