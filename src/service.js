const express = require("express");
const app = express()
const gamesRoute = require('./routes/games.route')

app.use(express.json());

gamesRoute(app)

module.exports = app