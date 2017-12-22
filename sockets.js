const io = require('socket.io');

module.exports = function(server){
    var sockets = io.listen(server);
    
    sockets.on('connection',function(socket){
        console.log("Nuevo cliente conectado");
        socket.on('nuevo-mensaje-cliente',function(datos){
            sockets.emit('mensaje-servidor',datos);
        })
    })
}

