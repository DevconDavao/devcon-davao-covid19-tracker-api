/**
 * V1 REST API Routes
 */
const { createUser, userProfile } = require('./users');

async function routes(fastify) {
    // TODO: This is a dummy content for DEMO purpose only. Please remove if not needed.
    fastify.get('/', async() => ({ message: 'UserManagement API' }));
    fastify.post('/', createUser);
    fastify.get('/profile/:username', userProfile);
    // fastify.get('/users', userList);
}

module.exports = routes;