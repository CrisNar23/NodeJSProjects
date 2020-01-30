//Requerir express para el proyecto
const express = require('express');
const app = express();

//Configurar puerto
//Si hay un puerto configurado en el sistema o asigna el 3000
app.set('port', process.env.PORT || 3000);

//Mostrar por consola que se inicio el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

