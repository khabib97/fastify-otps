async function routes(fastify, options){
    fastify.get('/', async function(request, reply) {
         return {hello: 'world'} 
    })   
}

module.exports = routes