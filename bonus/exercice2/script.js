var alertApp = angular.module('alertApp',[]);
alertApp.controller('alertBox',['$scope', '$window', function($scope, $window){
  $scope.alertPop = function(){
      $window.alert();
  };
}]);
