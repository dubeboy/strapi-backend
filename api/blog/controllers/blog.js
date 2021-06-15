'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        console.log("Hello here we gooo", ctx)
        const blogs = await strapi.services.blog.find(ctx.query)
        console.log("Hello here we gooo again", blogs)
        return blogs.map((blog) => ({ ...blog, author: { ...blog.author, profile_photo: { name: blog.author.profile_photo.name, thumbnailUrl: blog.author.profile_photo.formats.thumbnail.url }} }))
    }
};
