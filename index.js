(function() {

'use strict';

var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({ //change this equals to post body
	'lat':'6.132',
	'lng':'2.341',
	'dsc':'hmm'
});

var options = {
	hostname: 'localhost', //set it to hostname server
	method: 'POST', //set to request method
	port: 3000, //set it to server port
	path: '/field', //set it to request routes
	headers: {
		// 'Authentication' : 'Bearer {{token}}',
		'Content-Type': 'application/x-www-form-urlencoded', //turn this on if method is put or post
		'Content-Length': Buffer.byteLength(postData), //turn this on if method is put or post
	}
}

var req = http.request(options, (res) => {
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		console.log(`Body: ${chunk}`);
	});
	res.on('end', () => {
		console.log('response ended');
	});
});

req.on('error', (e) => {
	console.log("error \n" + e);
});

if (options.method == 'POST' || options.method == 'PUT') {
	req.write(postData);
}

req.end();

})();