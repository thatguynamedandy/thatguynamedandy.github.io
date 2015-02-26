angular.module('casino-demo', [
  'casino-lights'
])
.controller('Home', function($scope) {
  $scope.config = {
    speed: 60,
    filter: 'random',
    power: true
  };
  $scope.showSettings = false;
});
