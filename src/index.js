require('dotenv/config')

const { build } = require('./app')
const { connectToDb } = require('./lib/utils/db')

async function start() {
  const port = process.env.PORT || 5000
  const app = build({
    logger: {
      transport: process.env.NODE_ENV === 'development' ? {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname'
        }
      } : null
    }
  })

  try {
    await connectToDb(app)
    await app.listen({ port })
  } catch(err) {
    app.log.error(err)
  }
}

start()
