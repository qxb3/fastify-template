const testController = require('./controller')
const testSchema = require('./schema')

module.exports = (app, _options, done) => {
  app.get('/', {
    schema: testSchema
  }, (req, reply) => testController(req, reply, app))

  done()
}
