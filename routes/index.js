const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  ctx.response.type = 'text/html';
  await ctx.render('index')
})

router.get('/html-template', async (ctx, next) => {
  ctx.response.type = 'text/html';
  await ctx.render('template')
})


router.get('/*', async (ctx, next) => {
  ctx.response.redirect('/');
})

module.exports = router
