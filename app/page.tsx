import Link from 'next/link'
import Image from 'next/image'
import { posts } from '@/.velite'

export default function HomePage() {
  const recent = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <main className="w-full">
      {/* Full-viewport split-screen hero — image bleeds to right edge */}
      <section className="grid md:grid-cols-[1fr_42%] min-h-[88vh] items-stretch">
        {/* Left: text, left-aligned with padding from page edge */}
        <div className="flex flex-col justify-center py-16" style={{ paddingLeft: 'var(--page-px)', paddingRight: 'var(--page-px)' }}>
          <p className="text-sm font-mono text-pink-500 dark:text-pink-300 mb-3 tracking-wide">
            ✿ hi, welcome to my corner
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-5 leading-[1.05]">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
              Joshua Jones
            </span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 max-w-md leading-relaxed">
            Software engineering student at Conestoga College. I work in C#, C++, and
            systems-level code. This is where I write about what I&apos;m learning and building.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="px-5 py-2.5 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-medium shadow-lg shadow-pink-300/40 hover:shadow-pink-400/60 hover:scale-105 transition-all"
            >
              Read the blog →
            </Link>
            <Link
              href="/resume"
              className="px-5 py-2.5 glass rounded-full font-medium hover:scale-105 transition-transform"
            >
              View resume
            </Link>
          </div>
        </div>

        {/* Right: image fills the full right panel, bleeds to viewport edge */}
        <div className="relative min-h-[400px] md:min-h-0">
          {/* Soft gradient fade from left so it blends into the text side */}
          <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[var(--background)] to-transparent" />
          <Image
            src="/images/hero2.gif"
            alt="hero"
            fill
            unoptimized
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-6 left-8 text-3xl float-slow z-10">♡</div>
          <div className="absolute top-6 left-6 text-2xl sparkle z-10">✦</div>
        </div>
      </section>

      {/* Recent posts — sits below the full-width hero */}
      {recent.length > 0 && (
        <section className="max-w-6xl mx-auto px-10 sm:px-16 py-16">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-300">
              ✿ recent posts
            </h2>
            <Link
              href="/blog"
              className="text-sm text-pink-500 hover:text-pink-600 dark:text-pink-300 dark:hover:text-pink-200 transition-colors"
            >
              all posts →
            </Link>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {recent.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="glass block h-full p-5 rounded-2xl hover:scale-[1.02] hover:shadow-pink-300/30 transition-all"
                >
                  <p className="text-xs font-mono text-purple-500 dark:text-purple-300 mb-2">
                    {new Date(post.date).toLocaleDateString('en-CA', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                  <h3 className="font-semibold mb-1.5 leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {post.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}
