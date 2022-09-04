const gameStatus = ["ativo", "inativo"]
const query = req.query.status
const gameListUsecase = require('../core/games/listargames.usecase')
    


const gameList = (req, res) => {
    
    console.log(req.query); 
    if(query) {
        if (!gameStatus.includes(req.query.status))
        return res.status(400).json({
            mensagem: "",
        })
    }

    const usecaseResult = gameListUsecase({status: query.status})



    console.log(req.body); 

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