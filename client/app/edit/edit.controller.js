export default class EditController {

  constructor($state, $stateParams, BeanService, RegionsService) {

    this.$stateParams = $stateParams;
    this.BeanService = BeanService;
    this.RegionsService = RegionsService;

    this.region = [];
    this.bean = {};

    this.BeanService.get({
        id: $stateParams.id
      })
      .$promise
      .then((data) => {
        data.importDate = data.importDate && new Date(data.importDate);
        this.bean = data;
      });

    this.RegionsService.query()
      .$promise
      .then((data) => {
        this.regions = data;
      });
  }

  update() {
    var param = {
      brand: this.bean.brand,
      amount: this.bean.amount,
      importDate: this.bean.importDate && this.bean.importDate.toISOString(),
      region: this.bean.region
    };

    this.BeanService.update({
        id: this.$stateParams.id
      }, param)
      .$promise
      .then((data) => {
        this.$state.go('app.root.list');
      });

  };
}
