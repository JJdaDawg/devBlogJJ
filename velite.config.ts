import { defineConfig, s, defineCollection } from 'velite'

// Define the Blog collection
const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.md', // Where your blog files live
  schema: s.object({
    title: s.string().max(100),
    slug: s.slug('blog'), // Automatically generates /blog/my-post
    date: s.isodate(),
    summary: s.string(),
    content: s.markdown(), // Converts markdown to HTML
  })
})

// Define the Resume as a "single" object
const resume = defineCollection({
  name: 'Resume',
  pattern: 'resume/data.json', 
  single: true,
  schema: s.object({
    name: s.string(),
    location: s.string(),
    education: s.array(s.object({
      school: s.string(),
      degree: s.string(),
      honors: s.string().optional()
    })),
    skills: s.array(s.string())
  })
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    clean: true
  },
  collections: { posts, resume }
})