/**
 * V1 REST API Routes
*/
async function routes(fastify) {
  // TODO: This is a dummy content for DEMO purpose only. Please remove if not needed.
  fastify.get('/', async () => ({ message: 'Authentication API' }));
}

module.exports = routes;
