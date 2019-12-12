const config = require('./../../config')
const DbService = require('moleculer-db')
const MongooseAdapter = require('moleculer-db-adapter-mongoose')
const MgmConfiguration = require('./../../models/models')

module.exports = {
  name: 'storage',
  mixins: [DbService],
  adapter: new MongooseAdapter(config.get('db').uri),
  model: MgmConfiguration,
  actions: {
    updateClientConfiguration: {
      params: {
        tenant: { type: 'string' },
        clientId: { type: 'string' },
        configuration: { type: 'object' }
      },
      handler (ctx) {
        const { tenant, clientId, configuration } = ctx.params
        return this.adapter.updateMany({ tenant, clientId }, { configuration })
      }
    },
    findOne: {
      params: {
        tenant: { type: 'string' },
        clientId: { type: 'string' }
      },
      handler (ctx) {
        const { tenant, clientId } = ctx.params
        return this.adapter.findOne({ tenant, clientId })
      }
    }
  }
}
