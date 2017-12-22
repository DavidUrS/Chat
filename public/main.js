$(function(){

    var socket = io();

    var message = $("#chat-message");
    var chat = $("#chat");

    message.focus();
    $('#message-box').submit(function(e){
        e.preventDefault();
        socket.emit('mensaje-cliente',message.val());
        
    });

    socket.on('mensaje-servidor',function(datos){
        chat.append(datos+'<br/>');
    })
})