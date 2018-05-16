import Router from 'koa-router'
import fs from 'fs'
import streamToPromise from 'stream-to-promise'

const router = new Router({
    prefix: `/api`
})
//router
router.get(`/`, async (ctx, next) => {
    ctx.response.type = `html`
    ctx.response.body = await streamToPromise(fs.createReadStream(`./src/View/index.html`, {encoding: `utf8`}))
})

// router.use(minioRouter.routes(), minioRouter.allowedMethods())
// router.use(graphqlRouter.routes(), graphqlRouter.allowedMethods())
export default router
