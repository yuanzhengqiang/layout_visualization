const router = require('koa-router')();
const ctrl_poster = require('../controler/ctrl-poster.js');
const ctrl_pdf = require('../controler/ctrl-pdf.js');

router.post('/poster', async (ctx, next) => {
  const poster = new ctrl_poster();
  ctx.body = await poster.get(null, null, ctx.request.body);
})

router.post('/pdf', async (ctx, next) => {
  const pdf = new ctrl_pdf();
  ctx.body = await pdf.get(null, null, ctx.request.body);
  ctx.response.type = 'application/pdf';
})
module.exports = router
