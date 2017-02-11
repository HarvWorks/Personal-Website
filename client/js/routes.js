var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './partials/index.html',
      controller: 'indexController'
    })
    .when('/dashboard', {
      templateUrl: './partials/portfolio.html',
      controller: 'dashboardController',
    })
    .when('/poll/:id', {
      templateUrl: './partials/show.html',
      controller: 'showController',
    })
    .when('/create', {
      templateUrl: './partials/topic.html',
      controller: 'topicController',
    })
    .otherwise({
      redirectTo: '/'
    });
});
