var skeleton = angular.module("skeletonApp",['ngRoute']);

skeleton.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when("/hds/",{
    templateUrl: 'views/hds/index.html'
  }).  
  otherwise({
    redirectTo: '/login/',
    templateUrl: 'views/essential/login.html',
    controller: 'loginController'
  });
}]);