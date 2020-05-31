const fp = require('fastify-plugin');

async function UserManagement(fastify) {
  fastify.register(require('./routes'), { prefix: '/user' });
}

module.exports = fp(UserManagement);
