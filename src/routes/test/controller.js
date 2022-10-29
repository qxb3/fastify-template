module.exports = (req, reply, app) => {
  const { name } = req.query

  // You dont need the try catch it just shows you how
  // can you use the somethingWentWring decorator
  try {
    reply.send({ reply: `Hello ${name}` })
  } catch(err) {
    app.somethingWentWring(app, reply, err)
  }
}
