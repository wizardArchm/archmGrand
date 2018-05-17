import Router from 'koa-router'
import fs from 'fs'
import streamToPromise from 'stream-to-promise'
import RestRouter from './Controller/RestController'

const router = new Router({
    prefix: `/api`
})
//router
router.get(`/`, async (ctx, next) => {
    ctx.response.type = `html`
    ctx.response.body = await streamToPromise(fs.createReadStream(`./src/View/index.html`, {encoding: `utf8`}))
})

router.use(RestRouter.routes(), RestRouter.allowedMethods())
// router.use(graphqlRouter.routes(), graphqlRouter.allowedMethods())
export default router
