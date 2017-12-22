const http = require('http');
const express = require('express');
const app = express();

var server = http.createServer(app);

app.set('port', 3000);
app.use(express.static(__dirname+'/public'));

server.listen(app.get('port'), function(){
    console.log("Servidor iniciado en puerto 3000");
});

require('./sockets.js')(server);