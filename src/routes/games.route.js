const { gameList } = require('../controllers/games.controller')

const gamesRoute = (app) => (
    app.get('/gamelist', gameList )
)

   module.exports = gamesRoute