'use strict'

var _ = require('./lodash')

var cf = require('./crossfilter')

module.exports = universe

function universe(data) {

  data = cf(data)

  var service = {
    cf: data,
    columns: [],
    filters: [],
  }

  _.assign(service, {
    column: require('./column')(service),
    find: require('./find')(service),
    filter: require('./filter')(service),
    dispose: require('./dispose')(service),
    clear: require('./clear')(service),
  })

  return service
}
