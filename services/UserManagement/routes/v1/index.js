/**
 * V1 REST API Routes
*/
const { SearchUser } = require('./users');

async function routes(fastify) {
  // TODO: This is a dummy content for DEMO purpose only. Please remove if not needed.
  fastify.get('/', async () => ({ message: 'UserManagement API' }));
  fastify.get('/user/:id', SearchUser);
}

module.exports = routes;
