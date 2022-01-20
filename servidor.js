const http = require('http');
const colors = require('colors');


const funcionServidor = function(req, res){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<h1> Bienvenido al servidor </h1>');
        res.end("termina");

    

};

const server = http. createServer(funcionServidor);
server.listen(3000, ()=>{console.log("servidor escuchando el puerto 3000")});

