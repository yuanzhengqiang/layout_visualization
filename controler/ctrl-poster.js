const service_poster = require('../service/service-poster.js');
class ctrl_poster {
  constructor() { }

  async get(url=null, name=null, {title, ...params}) {
    const poster = new service_poster();
    const path = await poster.get(url, title, params);
    const data = {
      path: path || null,
      code: path ? 200 : 500
    }
    return data
  }
}
module.exports = ctrl_poster;