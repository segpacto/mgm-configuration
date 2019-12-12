const { MoleculerError } = require('moleculer').Errors

module.exports = {
  params: {
    tenant: { type: 'string', required: true },
    clientId: { type: 'string', required: true },
    configuration: { type: 'object' }
  },
  handler (ctx) {
    const { tenant, clientId, configuration } = ctx.params

    return ctx.call('storage.create', { tenant, clientId, configuration })
  }
}
