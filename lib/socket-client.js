var net = require('net');

function SocketClient(PORT, HOST, DEBUG) {
	this.port = PORT || 9999;
	this.host = HOST || 'localhost';
	this.debug = DEBUG;

	this.client = new net.Socket();
	_bindHandlers.call(this);
	this.client.connect(this.port, this.host, function () {

	})
}

SocketClient.prototype.sendMessage = sendMessage;
SocketClient.prototype.receiveMessageHandler = receiveMessageHandler;
SocketClient.prototype.closeConnection = closeConnection;

function sendMessage(message) {
	var self = this; 
	console.log('message:', message);
	self.client.write(message + '\n');
}

function receiveMessageHandler() {
	this.client.on('data', function (data) {
	    console.log('Received: ' + data);
	});
}

function closeConnection(cb) {
	this.client.end();
	this.client.destroy();
	cb && cb();
}

function _bindHandlers() {
	var self = this;
	self.client.on('close', function () {
	    console.log('Connection closed');
	});
	self.client.on('connect', function () {
	    console.log('Connection opened on', self.host + ':' + self.port);
	});
	self.client.on('end', function () {
	    console.log('Disconnected from', self.host + ':' + self.port);
	});
}


module.exports = SocketClient;