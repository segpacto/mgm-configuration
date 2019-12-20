const { ServiceBroker } = require('moleculer')
const { name, version } = require('./../package.json')
const moleculerConfig = require('./config/moleculer.dev.config')

/**
 * This index is only used if want to debug something related with the lifecycle of the Service
 */
const broker = new ServiceBroker(Object.assign({
  started (broker) {
    broker.logger.info(`Broker ${name}:${version} started`)
  },
  stopped (broker) {
    broker.logger.info(`Broker ${name}:${version} stopped`)
  }
}, moleculerConfig))

broker.loadServices('./src/services')

broker.start().then(() => {
  broker.logger.info('All services up and running ...')
})

module.exports = broker
