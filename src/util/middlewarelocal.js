const middlewarelocal = (req, res, next) => {
    if (req.bacon.id !== 'test2') {
        res.status(401).send('usuario não atenticado')
    }
    else {
        next()
    }
}

module.exports ={
    middlewarelocal
}