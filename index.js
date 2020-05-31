require('module-alias/register');
require('dotenv').config();
require('make-promises-safe'); // installs an 'unhandledRejection' handler

// Initialize App
const fastify = require('fastify')({
  http2: process.env.NODE_ENV === 'production',
  logger: true,
});

// Register vendor modules
fastify.register(require('fastify-cors'));
fastify.register(require('fastify-compress'));
fastify.register(require('fastify-mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,
  useUnifiedTopology: true,
  url: `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/`,
});
fastify.register(require('fastify-rate-limit'), {
  max: 100,
  timeWindow: '1 minute',
});

// Register app modules
fastify.register(require('./services'));

fastify.listen(process.env.API_PORT, (err, address) => {
  if (err) {
    fastify.log.error(err);
    throw new Error('An error has occured.');
  }
  fastify.log.info(`Server listening on ${address}`);
});
