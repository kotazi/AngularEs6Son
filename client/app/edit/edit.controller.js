addEdit.controller('EditController', function($state, $stateParams, BeanService, RegionsService) {

  var edit = this;
  edit.regions = [];

  BeanService.get({
      id: $stateParams.id
    })
    .$promise
    .then(function(data) {
      data.importDate = data.importDate && new Date(data.importDate);
      edit.bean = data;
    });

  RegionsService.query()
    .$promise
    .then(function(data) {
      edit.regions = data;
    });

  edit.update = function() {
    var param = {
      brand: edit.bean.brand,
      amount: edit.bean.amount,
      importDate: edit.bean.importDate && edit.bean.importDate.toISOString(),
      region: edit.bean.region
    };

    BeanService.update({
        id: $stateParams.id
      }, param)
      .$promise
      .then(function(data) {
        $state.go('app.root.list');
      });

  };
});
