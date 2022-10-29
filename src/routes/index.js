module.exports = (app, _options, done) => {
  app.register(require('./test/router'), {
    prefix: '/test'
  })

  done()
}
