'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        const blogs = await strapi.services.blog.find(ctx.query)
        return blogs.map((blog) => ({
             ...blog, 
             author: { 
                ...blog.author,
                profile_photo: { 
                    name: blog.author.profile_photo.name,
                    thumbnailUrl: blog.author.profile_photo.formats.thumbnail.url
                }
            }
        }))
    }
};
