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


module.exports = ({ status = undefined, }) => {

    let resultFromDB = data ;
    if(status) {
        resultFromDB = data.filter(item => item.status == status )
    }

    return resultFromDB;
}