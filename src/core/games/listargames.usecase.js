const gameRepository = require('../../infra/data/repositories/games.repository')

module.exports = ({ status = undefined, }) => {
    const filter ={
        status
    } ;
    const resultFromDB =  gameRepository.find({status})
    return resultFromDB;
}