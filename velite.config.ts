import { defineConfig, s, defineCollection } from 'velite'

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.md',
  schema: s.object({
    title: s.string().max(100),
    slug: s.slug('blog'),
    date: s.isodate(),
    summary: s.string(),
    content: s.markdown(),
  })
})

const resume = defineCollection({
  name: 'Resume',
  pattern: 'resume/data.json',
  single: true,
  schema: s.object({
    name: s.string(),
    location: s.string(),
    contact: s.object({
      email: s.string(),
      github: s.string(),
    }),
    education: s.array(s.object({
      school: s.string(),
      degree: s.string(),
      honors: s.string().optional(),
      start: s.string().optional(),
      end: s.string().optional(),
    })),
    skills: s.array(s.string()),
    projects: s.array(s.object({
      title: s.string(),
      description: s.string(),
      tech: s.array(s.string()),
      link: s.string().optional(),
    })),
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
