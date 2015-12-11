<<<<<<< HEAD
// tab controller
app.controller('CustomTabController', ['$scope', function($scope) {
  $scope.tabs = [true, false, false];
  $scope.tab = function(index){
    angular.forEach($scope.tabs, function(i, v) {
      $scope.tabs[v] = false;
    });
    $scope.tabs[index] = true;
  }
=======
// tab controller
app.controller('CustomTabController', ['$scope', function($scope) {
  $scope.tabs = [true, false, false];
  $scope.tab = function(index){
    angular.forEach($scope.tabs, function(i, v) {
      $scope.tabs[v] = false;
    });
    $scope.tabs[index] = true;
  }
>>>>>>> f7670e88ad3798a75d6e9c8b8912206c9b113183
}]);