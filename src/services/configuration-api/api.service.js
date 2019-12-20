const ApiGwService = require('moleculer-web')
const actions = require('./actions')
const config = require('./../../config')

module.exports = {
  name: 'configuration-api',
  mixins: [ApiGwService],
  settings: {
    port: config.get('apiPort')
  },
  actions
}
