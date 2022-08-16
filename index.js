const express = require("express");

const app = express()

const PORT = 3002 || process.env.PORT

app.use(express.json());

app.get('/get', (req, res) => {
    const data = req.query
    res.send(console.log(data))
})

app.listen(PORT, e => {
    if(!e) {
        console.log(`Está rodando na porta ${PORT}`)
    } else {
        console.log(e);
    }
})