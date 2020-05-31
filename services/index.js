/**
 * README:
 * When adding new Service modules, please register the service in `serviceflag.json` found in the root project folder
 * and also update `serviceflag.json.tpl` for other's reference.
*/
const fp = require('fastify-plugin');
const ServiceFlag = require('@/serviceflag.json');

async function services(fastify) {
  for (let i = 0, len = Object.keys(ServiceFlag).length; i < len; ++i) {
    if (ServiceFlag[i].enabled) {
      fastify.register(require(`./${ServiceFlag[i].name}`));
    }
  }
}

module.exports = fp(services);
