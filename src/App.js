import Koa from 'koa'
import router from './urls'
import json from 'koa-json'
import parameter from 'koa-parameter'

const app = new Koa()
app.use(json())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(parameter(app))
export default app

