const { model, Schema, connect } = require('mongoose')

const createSchema = (name, schema) => {
  return model(name, new Schema(schema))
}

const requiredType = (type, options = {}) => {
  if (type.type === Schema.Types.ObjectId)
    return { ...type, required: true }

  return { type, ...options, required: true }
}

const relationship = (ref, options) => {
  return { type: Schema.Types.ObjectId, ref, ...options }
}

const connectToDb = async (app) => {
  const db = await connect(process.env.MONGO_URI)
  db.set('toJSON', {
    virtuals: true,
    transform: (_doc, converted) => {
      delete converted._id
      delete converted.__v
    }
  })

  app.log.info('Connected to database')

  return db
}

module.exports = {
  createSchema,
  requiredType,
  relationship,
  connectToDb
}
