import Koa from 'koa'
import router from './urls'
import json from 'koa-json'
import parameter from 'koa-parameter'

const app = new Koa()
app.use(json())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(parameter(app))
var server = require(`http`).createServer(app.callback())
var io = require(`socket.io`)(server, {wsEngine: `ws`, serveClient: false})
io.on(`connection`, (socket) => {
    console.log(socket)
    // socket.emit(`news`, `world`)

    io.emit(`news`, {for: socket.id, message: `world`})
})
export default server

