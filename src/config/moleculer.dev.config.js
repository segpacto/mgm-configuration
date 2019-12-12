const config = require('.')

const moleculer = config.get('moleculer')

module.exports = {
  logger: moleculer.LOGGER,
  logLevel: moleculer.LOG_LEVEL,
  logFormatter: moleculer.LOG_FORMATTER,
  serializer: moleculer.SERIALIZER,

  hotReload: true
}
