const service = require('./src/service');

const PORT = 3002 || process.env.PORT

const listener = service.listen(PORT,  function () {
        console.log("Node.js listening on port" + listener.address().PORTA)
})