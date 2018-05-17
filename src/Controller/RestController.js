import Router from 'koa-router'

const router = new Router({
    prefix: `/rest`
})

const testGet = (ctx, next) => {
    ctx.response.body = `hello world from restful api`
}
router.get(`/testget`, testGet)
export default router