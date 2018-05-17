import Koa from 'koa'
import router from './urls'
import json from 'koa-json'
import parameter from 'koa-parameter'

const app = new Koa()
app.use(json())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(parameter(app))
const server = require(`http`).createServer(app.callback())
export const io = require(`socket.io`)(server, {wsEngine: `ws`, serveClient: false, path: `/api/websocket`})
io.on(`connection`, (socket) => {
    console.log(socket)
    // socket.emit(`news`, `world`)
    io.sockets.sockets[socket.id].emit(`news`, {for: socket.id, message: `world`})
    io.emit(`news`, {message: `a new user connected`})
})
export default server

