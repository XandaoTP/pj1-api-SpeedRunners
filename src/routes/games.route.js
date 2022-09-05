const { gameList, showGame } = require('../controllers/games.controller')

const gamesRoute = (app) => (
    app.get('/gamelist', gameList ),
    app.get('/gamelist/:id', showGame )
)

   module.exports = gamesRoute