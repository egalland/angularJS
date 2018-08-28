var routeApp = angular.module('routeApp', ['ngRoute']);

routeApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  .when('/form', {
    templateUrl: 'partials/form.html',
    controller: 'formCtrl'
  })
  .when('/sujet', {
    templateUrl: 'partials/sujet.html',
    controller: 'sujetCtrl'
  })
  .otherwise({
    redirectTo: '/form'
  });
}]);

routeApp.controller('formCtrl', ['$scope', function($scope , $rootScope , $routeParams) {
  $scope.submit = function() {
    $scope.obj = [];
    if ($scope.userName && $scope.userEmail && $scope.subject && $scope.textArea) {
      $scope.obj.push(
        {
          name: this.userName,
          email: this.userEmail,
          sujet: this.subject,
          text: this.textArea
        }
      );
    }
  };
}]);
routeApp.controller('sujetCtrl', ['$scope', function($scope , $routeParams) {}]);
