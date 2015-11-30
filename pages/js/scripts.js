
var socket = io.connect();
// 'http://localhost:8080', {reconnect: true}

    var RoboClient = angular.module('RoboClient', [])

    .controller('MainCtrl', function( $scope ) {

    	$scope.Message = 'Hang On';
      
        socket.on('news', function (data) {
          console.log(data);
          $scope.Message = data.message;
          $scope.$apply();
          console.log($scope.Message);
          // socket.emit('my other event', { my: 'data' });
        });

    });