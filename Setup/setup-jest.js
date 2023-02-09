const config = require("./jestpuppeteer.config");
jest.retryTimes(config.retryCount);