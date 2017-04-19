var skeleton = angular.module("skeletonApp",['ui.router']);

skeleton.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('login',{
    url: '/login/',
    templateUrl: 'views/essential/login.html',
    controller: 'loginController'
  }).state('hds',{
    url: '/hds/',
    templateUrl: 'views/hds/index.html'
  }).state('accounts',{
    url: '/accounts/',
    templateUrl:'views/hds/accounts.html',
    controller: 'accountsController'
  }).state('connections',{
    url: '/connections',
    templateUrl:'views/hds/connections.html',
    controller: 'connectionsController'
  });

  $urlRouterProvider.otherwise('/login/');
}]);


