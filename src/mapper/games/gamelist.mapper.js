const DTOTomain = ({}) => {

}

const domainToDTO = (listargames) => {

    return {

        total: listargames.length, 

        games: [
            ...listargames.map(item => {
                return {
                id: item.id,
                description: item.description,
                status: item.status
                }
            })
        ]
    }
}

module.exports = {
    DTOTomain,
    domainToDTO
}