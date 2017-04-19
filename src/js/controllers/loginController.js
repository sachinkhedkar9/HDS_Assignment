skeleton.controller('loginController', ["$scope", "$location", "$http", function($scope, $location, $http){
    $scope.userLogin = {
        username: "sachin",
        password: "sachin123"
    };

    $scope.login = function(){
        console.log('login obj - ', $scope.loginUser);
        console.log('user obj - ', $scope.userLogin);
        if($scope.userLogin.username === $scope.loginUser.username &&
           $scope.userLogin.password === $scope.loginUser.password){
            console.log("logging in", $location.path());
            $scope.navigateToApp();
        }
        else{
            alert("Invalid credential entered");            
        }
    };

    $scope.navigateToApp = function(){
        $location.path('/hds/');        
    };   
}]);