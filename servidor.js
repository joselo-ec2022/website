const http = require('http');

const server = http.createServer{
    function (req, res) {
        res.write("El servidor esta levantado");
        res.end("termina");

    }

}.listen(3000)

