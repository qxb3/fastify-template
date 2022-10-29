const plugin = require('fastify-plugin')

const { somethingWentWrong } = require('./errors')

module.exports = plugin((app, _options, done) => {
  app.decorate('somethingWentWrong', somethingWentWrong)

  done()
})
