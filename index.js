var SocketClient = require('./lib/socket-client.js');
var bindKeypress = new require('./lib/inputWorker.js');

var sc = new SocketClient(9999, 'localhost', true)

console.log('press ENTER to start');

bindKeypress(function(key){
    sc.sendMessage('key: '+ JSON.stringify(key));
}, function() {
    sc.closeConnection(process.exit);
})

