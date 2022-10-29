module.exports = {
  query: {
    type: 'object',
    required: ['name'],
    properties: {
      name: { type: 'string' }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        reply: { type: 'string' }
      }
    }
  }
}
