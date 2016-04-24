var keypress = require('keypress');
 
keypress(process.stdin);
 
process.stdin.setRawMode(true);
process.stdin.resume();

function bindKeypress(handler, onexit) {
	process.stdin.on('keypress', function (ch, key) {
		if (key && key.ctrl && key.name == 'c') {
	        if(onexit){
	        	onexit();
	        } else {
		        process.exit();
	        }
	        return;
	    }
		handler(key);
	});
}

module.exports = bindKeypress;