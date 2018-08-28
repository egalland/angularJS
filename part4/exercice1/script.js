var app = angular.module('myCount', []);
app.controller('myCtrl', function($scope) {
  // initialisation et déclaration de la variable pour compter
    $scope.count = 0;
    // récupération du clique sur le bouton plus et incrémentation
    $scope.plus = function() {
        $scope.count++;
      }
    // récupération du clique sur le bouton plus et décrémentation
    $scope.minus = function() {
        $scope.count--;
    }
});
