const gameRepository = require('../../infra/data/repositories/games.repository')



module.exports = (id) => {
    const resultFromDB =  gameRepository.findById(id)
    
    
    
    return resultFromDB;
}