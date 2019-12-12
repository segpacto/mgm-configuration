const config = require('.')

const moleculer = config.get('moleculer')

module.exports = {
  logger: moleculer.LOGGER,
  logLevel: 'info',
  logFormatter: moleculer.LOG_FORMATTER,
  serializer: moleculer.SERIALIZER,

  hotReload: false
}
