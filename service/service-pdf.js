const api_pdf = require('../api/api-pdf');
const api_oss = require('../api/api-oss');
const api_redis = require('../api/api-redis');


class service_pdf{
  constructor() {

  }

  async get(url, name, params) {
    const pdf = new api_pdf();
    const oss = new api_oss();
    const redis = new api_redis();
    
    let path = '';
    path = await redis.getKey(name).then((res) => {
      return res;
    })
    if (!path) {
      const localPath = await pdf.set(url, name, params);
      path = await oss.put(localPath, name, 'pdf').then((res) => {
        return res;
      })
    }

    return path; 
  }

}
module.exports = service_pdf;