const api_oss = require('../api/api-oss');
const api_redis = require('../api/api-redis');

class service_oss {
  constructor() {

  }

  async get(url, name, type='images') {
    const oss = new api_oss();
    const redis = new api_redis();
    const onlinePath = await oss.put(url, name, type).then((res) => {
      return res;
    })
    await redis.setKey(name, onlinePath)
    return onlinePath; 
  }

}
module.exports = service_oss;