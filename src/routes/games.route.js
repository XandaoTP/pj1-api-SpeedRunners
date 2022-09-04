const gamesRoute = (app) => (
    app.get('/gamelist', function (req, res){
        res.json({
            games: [{
                id: "",
    
            }],
        })
    })
)

   module.exports = gamesRoute