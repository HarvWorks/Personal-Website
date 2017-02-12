var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './partials/index.html',
      controller: 'indexController'
    })
    .otherwise({
      redirectTo: '/'
    });

});
