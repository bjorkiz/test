var http = require('http');


var options = {
  host: '127.0.0.1',
  port: '1337',
  path: '/'
};

function execute (){
	http.get(options, function(response){
		response.on("data", function(data){
			response.setEncoding("utf8");
			console.log(data.toString());
		});
		response.on('error', function(e){
			console.log("Error: " + e.message);
		})
	});
}

execute();
options.path = '/test';
execute();