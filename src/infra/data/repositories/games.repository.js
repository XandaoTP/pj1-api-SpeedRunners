const data = [
    {
        id: "1",
        description: "1",
        status: "ativo"

    },
    {
        id: "2",
        description: "2",
        status: "inativo"

    }
]

const find = ({status}) => {
    let resultFromDB = data ;
    if(status) {
        resultFromDB = data.filter(item => item.status == status )
    }
    return resultFromDB
} 

module.exports = {
    find,
}