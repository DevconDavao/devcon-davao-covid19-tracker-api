/**
 * TODO: This is a dummy content for DEMO purpose only. Please remove if not needed.
*/
/**
 * Search facility using request.
 *
 * @param {Object}
*/
async function SearchFacility(request) {
  const { db } = this.mongo;
  const result = await db.collection.findOne({ id: request.params.id });

  if (result.value === null) {
    throw new Error('Invalid value');
  }
  return result.value;
}

module.exports = {
  SearchFacility,
};
