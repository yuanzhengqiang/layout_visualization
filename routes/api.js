const router = require('koa-router')();
const service_poster = require('../service/service-poster.js');

router.post('/poster', async (ctx, next) => {
  
  const poster = new service_poster();
  const path = await poster.get(null, null, ctx.request.body);
  const data = {
    path: path || null,
    code: path ? 200 : 500
  }
  ctx.body = data;
  next();
})

module.exports = router
