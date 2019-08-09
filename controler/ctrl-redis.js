const api_redis = require('../api/api-redis.js');
const url2map = require('../tools/url-param.js');
class ctrl_redis {
  constructor() { }

  async set({key, value, expire=null}) {
    const redis = new api_redis();
    const res = await redis.setKey(key, value, expire);
    const data = {
      res: res || null,
      code: res ? 200 : 500
    }
    return data
  }

  async get(url) {
    const map = url2map(url);
    const redis = new api_redis();
    const res = await redis.getKey(map.get('key'));
    const data = {
      res: res || null,
      code: res ? 200 : 500
    }
    return data
  }
}
module.exports = ctrl_redis;