
var socket = io.connect();
// 'http://localhost:8080', {reconnect: true}

    var RoboClient = angular.module('RoboClient', [])

    .controller('MainCtrl', function( $scope ) {
      
        socket.on('news', function (data) {
          console.log(data);
          // socket.emit('my other event', { my: 'data' });
        });

    });