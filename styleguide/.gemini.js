module.exports = {
  rootUrl: 'http://localhost:8000',
  gridUrl: 'http://127.0.0.1:4444/wd/hub',
  windowSize: '1600x1080',

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ["disable-gpu", "no-sandbox"]
        }
      }
    }
  }
};