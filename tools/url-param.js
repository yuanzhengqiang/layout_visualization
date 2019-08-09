function url2map(url) {
  try {
    const params = new URLSearchParams(location.href)
    return params;
  } catch (err) {
    return null;
  }
}
module.exports = url2map;