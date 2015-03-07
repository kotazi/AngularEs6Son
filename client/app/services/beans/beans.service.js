export default class BeanService {

  constructor($resource) {
    this.$resource = $resource;
  }

  create() {
    return this.$resource('http://localhost:8000/api/beans/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }

}
