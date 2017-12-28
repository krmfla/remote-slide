var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('switch slide', function(text){
    io.emit('switch slide', text);
  });
});

http.listen(port, function(){
  console.log('listening on: ' + port);
});
