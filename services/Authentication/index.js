const fp = require('fastify-plugin');

async function Authentication(fastify) {
  fastify.register(require('./routes'), { prefix: '/auth' });
}

module.exports = fp(Authentication);
