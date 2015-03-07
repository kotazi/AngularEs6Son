import BeanService from './beans/beans.service';
import RegionsService from './regions/regions.service';

let app = angular.module('Es6SonApp.services', ['ngResource']);

app.factory('BeanService', ['$resource', ($resource) => new BeanService($resource).create()]);
app.factory('RegionsService', ['$resource', ($resource) => new RegionsService($resource).create()]);
