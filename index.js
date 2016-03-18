var express = require('express');
var fs = require('fs');
var hogan = require('hogan-express');
var bodyParser = require('body-parser');
var childProcess = require('child_process');

const exec = childProcess.exec;

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
})); 

app.set('views', __dirname + '/views');
app.engine('html', hogan);
app.set('view engine', 'html');

// the code will be stored inside a temporary file, tmp.bsh
// then the beanshell will intepret the tmp.bsh file
app.post('/code', function(req, res) {
	var code = req.body.code;
	var params = req.body.params;

	if (code == undefined || code == "") {
		res.json({out: "", err: "Empty command"});
		return;
	}	
	fs.writeFile("tmp.bsh", code, function(err) {
		if(err) {
			res.json({out: "", err: err});
			return;
		}
	
		var cmd = "java -cp lib/bsh-2.0b6.jar " + params + "bsh.Interpreter tmp.bsh";
		exec(cmd, {shell: '/bin/bash'}, function (err, stdout, stderr) {
			res.json({out: stdout, err: stderr});
			return;
		});
	});
});

app.all(['/','/index'], function (req, res, next) {
	res.render('index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Server is running on port " + port);
});
