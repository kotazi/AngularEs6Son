export default class AddController {
  constructor($state, $http, RegionsService) {
    this.$state = $state;
    this.$http = $http;
    this.RegionsService = RegionsService;

    this.regions = [];

    this.RegionsService.query()
      .$promise
      .then((data) => {
        this.regions = data;
      });
  }

  register() {
    $http.post('http://localhost:8000/api/beans', {
      brand: add.bean.brand,
      amount: add.bean.amount,
      importDate: add.bean.importDate && add.bean.importDate.toISOString(),
      region: add.bean.region
    }).success(function() {
      $state.go('app.root.list');
    });
  };

}
