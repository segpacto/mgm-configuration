
module.exports = {
  params: {
    tenant: { type: 'string', required: true },
    clientId: { type: 'string', required: true },
    configuration: { type: 'object' }
  },
  handler (ctx) {
    const { tenant, clientId, configuration } = ctx.params

    return ctx.call('storage.updateClientConfiguration', { tenant, clientId, configuration })
  }
}
