import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '@/.velite'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  const post = posts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-pink-500 hover:text-pink-600 dark:text-pink-300 dark:hover:text-pink-200 mb-8 transition-colors"
      >
        ← back to blog
      </Link>

      <article className="glass rounded-3xl p-8 sm:p-12 shadow-xl shadow-purple-300/10">
        <header className="mb-10 pb-8 border-b border-pink-200/40 dark:border-purple-300/15">
          <p className="text-xs font-mono text-purple-500 dark:text-purple-300 mb-3 tracking-wide">
            ✦ {new Date(post.date).toLocaleDateString('en-CA', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
              {post.title}
            </span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {post.summary}
          </p>
        </header>

        <div
          className="prose prose-gray dark:prose-invert max-w-none
            prose-headings:font-semibold
            prose-a:text-pink-600 dark:prose-a:text-pink-300 prose-a:no-underline hover:prose-a:underline
            prose-code:text-purple-600 dark:prose-code:text-purple-300 prose-code:bg-purple-100/50 dark:prose-code:bg-purple-500/15 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-900/90 prose-pre:rounded-xl
            prose-blockquote:border-l-pink-400 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  )
}
