const fp = require('fastify-plugin');

async function routes(fastify, options) {
  fastify.register(require('./v1'), { prefix: `${options.prefix}/v1` });
}

module.exports = fp(routes);
