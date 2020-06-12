var config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 7777,
  databaseURL: process.env.MONGODB_URI || `mongodb://localhost:27017/ERP`,
  secret: process.env.SECRET || 'BABAK'
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

var envConfig;

try {
  envConfig = require('./' + config.env);
  envConfig = envConfig || {};

} catch (e) {
  envConfig = {};
}

module.exports = Object.assign(config, envConfig);