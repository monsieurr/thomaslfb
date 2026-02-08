import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      publishDate: z.date(), // Kept for sorting, but won't be displayed
      description: z.string(),
      tags: z.array(z.string()).optional(),
      isDraft: z.boolean().default(false),
    })
});

const projectsCollection = defineCollection({
    type: 'content',
    // 1. Change schema to a function ({ image }) to enable image validation
    schema: ({ image }) => z.object({
      title: z.string(),
      publishDate: z.date(),
      description: z.string(),
      tags: z.array(z.string()).optional(),
      isDraft: z.boolean().default(false),
      
      // 2. Add the cover image
      // image() checks if the file exists in src/assets
      // .optional() means you don't HAVE to include one
      coverImage: image().optional(), 
      
      // Optional: It's good practice to allow alt text if the image exists
      coverAlt: z.string().optional(),
    })
});

export const collections = {
  'articles': articlesCollection,
  'projects': projectsCollection,
};