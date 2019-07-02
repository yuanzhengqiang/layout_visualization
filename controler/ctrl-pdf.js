const service_pdf = require('../service/service-pdf.js');
class ctrl_pdf {
  constructor() { }

  async get(url=null, name=null, {title, ...params}) {
    const pdf = new service_pdf();
    const path = await pdf.get(url, title, params);
    const data = {
      path: path || null,
      code: path ? 200 : 500
    }
    return data
  }
}
module.exports = ctrl_pdf;