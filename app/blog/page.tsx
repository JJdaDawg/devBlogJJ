import Link from 'next/link'
import { posts } from '@/.velite'

export default function BlogPage() {
  const sorted = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
      <header className="mb-12">
        <p className="text-sm font-mono text-pink-500 dark:text-pink-300 mb-2">✿ writing</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
      </header>

      {sorted.length === 0 ? (
        <div className="glass rounded-2xl p-10 text-center">
          <p className="text-gray-600 dark:text-gray-300">No posts yet — check back soon ✦</p>
        </div>
      ) : (
        <ul className="grid gap-5 md:grid-cols-2">
          {sorted.map((post, i) => {
            const accents = [
              'from-pink-300/30 to-purple-300/30',
              'from-purple-300/30 to-sky-300/30',
              'from-sky-300/30 to-pink-300/30',
            ]
            const accent = accents[i % accents.length]
            return (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  <div className="glass relative h-full p-6 rounded-2xl group-hover:scale-[1.01] transition-transform">
                    <p className="text-xs font-mono text-purple-500 dark:text-purple-300 mb-2">
                      {new Date(post.date).toLocaleDateString('en-CA', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h2 className="text-xl font-semibold mb-2 leading-snug group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {post.summary}
                    </p>
                    <span className="inline-block mt-3 text-xs text-pink-500 dark:text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      read →
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </main>
  )
}
