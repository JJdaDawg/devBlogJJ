import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="glass sticky top-0 z-50 border-b border-pink-200/40 dark:border-purple-300/10">
      <div className="w-full py-4 flex items-center justify-between" style={{ paddingLeft: 'var(--page-px)', paddingRight: 'var(--page-px)' }}>
        <Link
          href="/"
          className="font-semibold tracking-tight text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Joshua Jones <span className="sparkle">✦</span>
        </Link>
        <div className="flex gap-1 sm:gap-2 text-sm">
          <Link
            href="/blog"
            className="px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-200 hover:bg-pink-100/60 dark:hover:bg-pink-500/15 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/resume"
            className="px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-200 hover:bg-purple-100/60 dark:hover:bg-purple-500/15 transition-colors"
          >
            Resume
          </Link>
          <a
            href="https://github.com/JJdaDawg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-200 hover:bg-sky-100/60 dark:hover:bg-sky-500/15 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
