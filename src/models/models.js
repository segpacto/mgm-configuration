'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MgmConfiguration = new Schema({
  tenant: { type: String },
  clientId: { type: String },
  configuration: { type: Object }
}, {
  timestamps: true
})

MgmConfiguration.index({ tenant: 1, clientId: 1 }, { unique: true })

module.exports = mongoose.model('MgmConfiguration', MgmConfiguration)
