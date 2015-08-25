var http = require('http');
http.createServer(function (req, res) {
	var url = req.url;
	if(req.method == 'GET'){
		if(url == '/test'){
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Test\n');	
		} else{
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Hello World\n');
		}
	}
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');