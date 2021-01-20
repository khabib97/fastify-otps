const fastify = require('fastify')({
    logger: {
        prettyPrint: true
    }
})

fastify.register(require('./app'))

fastify.listen(3000, function(err, address){
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }
    //app.log.info(`server listening on ${address}`)
})