const express = require("express");
const app = express();
const port = 3000;

// EP 1
app.get("/", (req, res) => {
    res.send("We are in Express omg");
});

// open server
app.listen(port, () => {
    console.log('Servidor en http://localhost:${port}')
});