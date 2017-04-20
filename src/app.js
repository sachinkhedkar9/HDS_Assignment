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
  }).state('hds.accounts',{
    url: 'accounts',
    templateUrl:'views/hds/accounts.html',
    controller: 'accountsController'
  }).state('hds.connections',{
    url: 'connections',
    templateUrl:'views/hds/connections.html',
    controller: 'connectionsController'
  });

  $urlRouterProvider.otherwise('/login/')
                    .when('/hds/', '/hds/{accounts}');
}]);


