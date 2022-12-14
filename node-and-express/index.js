let express = require('express');
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Create
app.post('/', function(req, res) {
    res.send(`Te llamas ${req.body.name}`);
});

// Read
app.get('/', function(req, res) {
    res.send("Hola mundo");
});

// Update
app.put('/', function(req, res) {
    res.send(`Haz actualizado el registro numero: ${req.body.id}`);
});

// Delete
app.delete('/users', function(req, res) {
    res.send(`Haz eliminado el registro: ${req.query.user}`)
});

let server = app.listen(8080, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Aplicacion escuchando en http://%s:%s", host, port);
})