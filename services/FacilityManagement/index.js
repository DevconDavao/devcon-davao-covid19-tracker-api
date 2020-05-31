const fp = require('fastify-plugin');

async function FacilityManagement(fastify) {
  fastify.register(require('./routes'), { prefix: '/facility' });
}

module.exports = fp(FacilityManagement);
