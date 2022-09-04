const gameList = (req, res) => {
    console.log(req.query); 

        res.json({
            games: [{
                id: "",
                description: "",
                status: false
    
            }],
        })
    }


module.exports = {
    gameList,
}