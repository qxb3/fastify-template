const somethingWentWrong = (app, error, reply, customMessage) => {
  app.log.error(error)
  reply.internalServerError(customMessage || 'Something went wrong.. Please try again later')
}

module.exports = { somethingWentWrong }
