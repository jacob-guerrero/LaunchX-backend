const http = require('http'); // Cargando un modulo de node.js
/* const rd = require('./modules/retrievedate'); */
const url = require('url');

http.createServer(function(req,res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    /* res.write("La fecha y hora es:" + rd.RetrieveDate());
    res.write(req.url); */
    const query = url.parse(req.url, true).query;
    const text = query.year + " " + query.month;
    //res.end("Holaaa Mundo!!!");
    res.end(text); //Siempre debe tener un end
}).listen(8080);