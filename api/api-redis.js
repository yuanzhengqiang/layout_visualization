const redis = require('redis');

const PORT = 6379;
const HOST = '127.0.0.1';

const client = redis.createClient({port:PORT, host:HOST,no_ready_check: true});

class api_redis {
  constructor() {
    this.initConnect();
  }

  initConnect() {
    client.on('connect', () => {
      console.log('connect redis success!')
    });
    client.on("error", (err) => {
      console.log("Redis Error " + err);
    });
  }


  setKey(key, value, expire) {
    return new Promise((resolve, reject) => {
      client.set(key, value, (err, res) => {
        if (err) {
          reject(err);
        }
        if (!isNaN(expire) && expire > 0) {
          client.expire(key, parseInt(expire));
        }
        resolve(res)
      })
    })
    
  }

  getKey(key, callback) {
    return new Promise((resolve, reject) => {
      client.get(key, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res)
      })
    })
  }
}

module.exports = api_redis;