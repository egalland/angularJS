var app = angular.module('myTable', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get('voiture.json').then(function(response) {
      $scope.myCars = response.data;
  });
});
