const router = require('koa-router')();
const ctrl_poster = require('../controler/ctrl-poster.js');
const ctrl_pdf = require('../controler/ctrl-pdf.js');
const ctrl_redis = require('../controler/ctrl-redis.js');

router.post('/api/poster', async (ctx, next) => {
  const poster = new ctrl_poster();
  ctx.body = await poster.get(ctx.request.body);
})

router.post('/api/pdf', async (ctx, next) => {
  const pdf = new ctrl_pdf();
  ctx.body = await pdf.get(null, null, ctx.request.body);
  ctx.response.type = 'application/pdf';
})

router.post('/api/redis', async (ctx, next) => {
  const redis = new ctrl_redis();
  ctx.body = await redis.set(ctx.request.body);
})

router.get('/api/redis', async (ctx, next) => {
  const redis = new ctrl_redis();
  ctx.body = await redis.get(ctx.request.url);
})

module.exports = router
