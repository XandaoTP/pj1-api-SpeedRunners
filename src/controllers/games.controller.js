const gameStatus = ["ativo", "inativo"]
const gameListUsecase = require('../core/games/listargames.usecase')
const gameListMapper = require('../mapper/games/gamelist.mapper')    


const gameList = (req, res) => {
    console.log(req.query); 
    const query = req.query.status
    if(query) {
        if (!gameStatus.includes(req.query.status))
        return res.status(400).json({
            mensagem: "",
        })
    }

    const usecaseResult = gameListUsecase({status: query})

    res.json(gameListMapper.domainToDTO(usecaseResult))
}

const showGame = (req, res) => {
    console.log(req.params); 
    const id = req.params.id

    if(!id || id == ' ') {
        return res.status(400).json({
            mensagem: "Game id não informado.",
        })
    }
    const usecaseResult = gameListUsecase({status: query})

        res.json({
            id: 'sads',
            description: 'asa',
            status: 'ativo',
            incricoes: [

            ]

        })
}

module.exports = {
    gameList,
    showGame
}