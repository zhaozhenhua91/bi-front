<<<<<<< HEAD
app.controller('SliderCtrl', function($scope) {
  $scope.cost = 40;
  $scope.range = {
    min: 30,
    max: 60
  };
  $scope.currencyFormatting = function(value) { 
    return"$"+value.toString();
  }
=======
app.controller('SliderCtrl', function($scope) {
  $scope.cost = 40;
  $scope.range = {
    min: 30,
    max: 60
  };
  $scope.currencyFormatting = function(value) { 
    return"$"+value.toString();
  }
>>>>>>> f7670e88ad3798a75d6e9c8b8912206c9b113183
});