const data = [
    {
        id: "",
        description: "",
        status: false

    }
]


module.exports = ({ status = undefined, }) => {

    let resultFromDB = data ;
    if(status) {
        resultFromDB = data.filter(item => item.status == status )
    }

    return resultFromDB;
}