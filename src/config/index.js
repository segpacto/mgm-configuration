require('dotenv').config()
const ENV = process.env

const Config = {
  apiPort: ENV.PORT || 3001,
  enableAuth: true,
  db: {
    uri: 'mongodb://localhost:27017/mgm-configuration'
  },
  moleculer: {
    LOGGER: ENV.LOGGER || true,
    LOG_LEVEL: ENV.LOG_LEVEL || 'debug',
    SERIALIZER: ENV.SERIALIZER || 'JSON',
    HOT_RELOAD: ENV.HOT_RELOAD || true
  }
}

module.exports = {
  get: (property) => (property in Config) ? Config[property] : undefined
}
