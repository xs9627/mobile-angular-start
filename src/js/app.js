angular.module('FunUI', [
  'ngRoute',
  'mobile-angular-ui',
  'ui.bootstrap',
  'FunUI.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false})
    .when('/onlinebook', {templateUrl:'onlinebook.html',  reloadOnSearch: false});
});