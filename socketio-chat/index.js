/*-- CONFIGURACION DEL SERVIDOR --*/
//Requerir express para el proyecto
const express = require('express');
const app = express();
//Modulo de express para el manejo de rutas
const path = require('path');

//Configurar puerto
//Si hay un puerto configurado en el sistema o asigna el 3000
app.set('port', process.env.PORT || 3000);

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Mostrar por consola que se inicio el servidor
//Se almacena en la constante server para que socket.io pueda enviar por ese server los mensajes
const server = app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});

/*-- CONFIGURACION DE SOCKET.IO --*/
//Requerir al modulo de Socket.io
const SocketIO = require('socket.io');
//Se le pasa el servidor app iniciado almacenado en la constante server para el envio de mensajes
//Se almacena el servidor iniciado y configurado con socket.io en la constante io
const io = SocketIO(server);

//Manejo de WebSockets
//La conexion la recibe desde el navegador en el parametro socket que viene del chat.js
io.on('connection', (socket) => {
  //Escucha cuando un usuario se conecta y muestra un mensaje por consola y el id del socket
  console.log('new connection', socket.id);

  //Escucha el mensaje del cliente con el nombre de usrTyping y el nombre del usuario que escribe 
  socket.on('usrTyping', usrTypingName => {
    //Reenvía el mensaje a todos los usuarios excepto él mismo
    socket.broadcast.emit('usrTypingName', usrTypingName);
  });
  
  //Escucha los eventos del socket que recibe por parametro
  //El primer parametro es el mismo nombre del emit del chat.js y en el segundo recibe el objeto
  socket.on('msgClient', msgContent =>{
    //Reenvia al naveg el mensaje escrito por el usuario a todos los usuarios incluido él mismo
    io.sockets.emit('msgSrvr', msgContent);
  });
});

