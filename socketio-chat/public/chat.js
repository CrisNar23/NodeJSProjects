//Recibe el websocket enviado por el servidor en la constante io y lo almacena en la constante socket
const socket = io();

//Capturar los elementos del DOM
let message = document.getElementById('message');
let username = document.getElementById('username');
let btnSend = document.getElementById('btnSend');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

//Agrega la accion al evento de presionar una tecla
message.addEventListener('keypress', () => {
  //Le envia al servidor el nombre del usuario que esta escribiendo
  socket.emit('usrTyping', username.value);
});

//
socket.on('usrTypingName', usrTypingName => {
  actions.innerHTML = `<p><em>${usrTypingName} is typing a message...</em></p>`
});

//Agregar accion al evento clic del boton
btnSend.addEventListener('click', () => {
  //En la conexion con el servidor llamada socket le emite el mensaje con un nombre y un objeto
  //capturado de los inputs
  socket.emit('msgClient', {
    message: message.value,
    username: username.value
  });
});

//Recibe la respuesta del servidor y la muestra en la seccion de lista de mensajes
socket.on('msgSrvr', msgContent => {
  actions.innerHTML = '';
  output.innerHTML += `<p>
    <strong>${msgContent.username}</strong>: ${msgContent.message}
  </p>`
});

