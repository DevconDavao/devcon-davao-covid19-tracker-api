const fp = require('fastify-plugin');

// eslint-disable-next-line no-unused-vars
async function middlewares(fastify) {
  // Register global decorator methods here
}

module.exports = fp(middlewares);
