
module.exports = {
  params: {
    tenant: { type: 'string', required: true },
    clientId: { type: 'string', required: true }
  },
  handler (ctx) {
    const { tenant, clientId } = ctx.params

    return ctx.call('storage.findOne', { tenant, clientId })
  }
}
