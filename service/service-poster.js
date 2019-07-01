const api_poster = require('../api/api-poster');
const api_oss = require('../api/api-oss');
const api_redis = require('../api/api-redis');


class service_poster {
  constructor() {

  }

  async get(url, name='test.png', params) {
    const poster = new api_poster();
    const oss = new api_oss();
    const redis = new api_redis();
    
    let path = '';
    path = await redis.getKey(name).then((res) => {
      return res;
    })
    if (!path) {
      const localPath = await poster.set(url, name, params);
      path = await oss.put(localPath, name, 'poster').then((res) => {
        return res;
      })
    }

    return path; 
  }

}
module.exports = service_poster;