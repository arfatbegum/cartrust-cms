const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::language-label.language-label', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    // Define the fields to search
    const searchableAttributes = ['label_key', 'text'];

    // Check for the _q parameter
    if (query._q) {
      const searchTerm = query._q;

      // Build the search filters for full sentence search
      const filters = {
        $or: searchableAttributes.map((attribute) => ({
          [attribute]: { $containsi: searchTerm },
        })),
      };

      // Execute the search query
      const results = await strapi.entityService.findMany('api::language-label.language-label', {
        filters,
        ...query,
      });

      return { data: results };
    }

    // Default behavior when no search term is provided
    return super.find(ctx);
  },
}));
