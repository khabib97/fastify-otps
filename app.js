const path = require('path')
const autoload = require('fastify-autoload')

async function app(fastify, options){
    //old standard routing
    //fastify.register(require('./routes/baisc-router'))

    //auto load base on directory 
    fastify.register(autoload,{
         dir: path.join(__dirname, 'routes')
    })
}
module.exports = app



