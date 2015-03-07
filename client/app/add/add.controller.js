appAdd.controller('AddController', function($state, $http, RegionsService) {
  var add = this;
  add.regions = [];
  RegionsService().success(function(data) {
      add.regions = data;
    });
  add.register = function() {
    $http.post('http://localhost:8000/api/beans', {
      brand: add.bean.brand,
      amount: add.bean.amount,
      importDate: add.bean.importDate && add.bean.importDate.toISOString(),
      region: add.bean.region
    }).success(function() {
      $state.go('app.root.list');
    });
  };
});