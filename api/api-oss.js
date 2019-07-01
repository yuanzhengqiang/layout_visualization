const OSS = require('ali-oss')
const path = require('path');

const client = new OSS({
  endpoint: '***',
  accessKeyId: '***',
  accessKeySecret: '***',
  bucket: '***'
});

class api_oss {
  constructor() {

  }

  put(localpath, name, type = 'images') {
    return new Promise(async (resolve, reject) => {
      try {
        const root = path.resolve(__dirname, '../public/' + type);
        const result = await client.put(localpath, root + '/' + name);
        resolve(result.url)
      } catch (e) {
        reject(e)
      } 
    })
  }

}
module.exports = api_oss;