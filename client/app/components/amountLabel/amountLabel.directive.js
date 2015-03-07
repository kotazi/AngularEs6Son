angular.module('Es6SonApp.components').directive('amountLabel', function() {

  return {
    templateUrl: 'app/components/amountLabel/amountLabel.html',
    restrict: 'EA',
    replace: true,
    transclude: true,
    scope: {
      amount: '='
    },
    link: link
  };

  function link(scope, element, attrs) {
    scope.class = 'text-info';
  }

});
