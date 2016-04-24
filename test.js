var socket = require('socket.io-client')
	//('http://localhost:6000')
	('http://192.168.0.104:6000'); //192.168.0.104


socket.on('connect', function(){
	socket.on('news', function (data) {
		console.log('serv said', data);
	});
	socket.emit('news', {
        hello: 'world'
    });
});
/*socket.on('event', function(data){});
socket.on('disconnect', function(){});*/