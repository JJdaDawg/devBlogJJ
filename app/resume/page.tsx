import { resume } from '@/.velite'

export default function ResumePage() {
  const skillColors = [
    'bg-pink-100/70 text-pink-700 border-pink-200 dark:bg-pink-500/15 dark:text-pink-200 dark:border-pink-400/30',
    'bg-purple-100/70 text-purple-700 border-purple-200 dark:bg-purple-500/15 dark:text-purple-200 dark:border-purple-400/30',
    'bg-sky-100/70 text-sky-700 border-sky-200 dark:bg-sky-500/15 dark:text-sky-200 dark:border-sky-400/30',
    'bg-emerald-100/70 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-200 dark:border-emerald-400/30',
    'bg-amber-100/70 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-200 dark:border-amber-400/30',
  ]

  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
      {/* Header */}
      <header className="glass rounded-3xl p-8 sm:p-10 mb-8 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 text-6xl opacity-20 float-slow">✿</div>
        <div className="absolute -bottom-6 -left-6 text-5xl opacity-20 float-slow" style={{ animationDelay: '-3s' }}>✦</div>

        <p className="text-sm font-mono text-pink-500 dark:text-pink-300 mb-2">✿ about me</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
            {resume.name}
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">📍 {resume.location}</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href={`mailto:${resume.contact.email}`}
            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-500/20 dark:to-purple-500/20 text-purple-700 dark:text-purple-200 hover:scale-105 transition-transform"
          >
            ✉ {resume.contact.email}
          </a>
          <a
            href={resume.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-100 to-purple-100 dark:from-sky-500/20 dark:to-purple-500/20 text-purple-700 dark:text-purple-200 hover:scale-105 transition-transform"
          >
            ⌘ GitHub
          </a>
        </div>
      </header>

      {/* 2-column grid: skills + education side by side, projects full width below */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <section className="glass rounded-2xl p-7">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-300 mb-4">
            ✦ skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill, i) => (
              <span
                key={skill}
                className={`px-3 py-1 rounded-full text-sm font-medium border ${skillColors[i % skillColors.length]}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="glass rounded-2xl p-7">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-300 mb-4">
            ♡ education
          </h2>
          <div className="space-y-5">
            {resume.education.map((edu) => (
              <div key={edu.school}>
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="font-semibold">{edu.school}</h3>
                  {edu.start && (
                    <span className="text-xs text-purple-500 dark:text-purple-300 font-mono whitespace-nowrap">
                      {edu.start}–{edu.end ?? 'present'}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.degree}</p>
                {edu.honors && (
                  <p className="text-xs italic text-pink-600 dark:text-pink-300 mt-1">
                    ✿ {edu.honors}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Projects — full width grid */}
      {resume.projects.length > 0 && (
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-300 mb-4 px-2">
            ★ projects
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {resume.projects.map((project, i) => {
              const accents = [
                'from-pink-300/30 to-purple-300/30',
                'from-purple-300/30 to-sky-300/30',
                'from-sky-300/30 to-emerald-300/30',
                'from-amber-300/30 to-pink-300/30',
              ]
              const accent = accents[i % accents.length]
              return (
                <div key={project.title} className="relative rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
                  <div className="glass relative h-full p-6 rounded-2xl">
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-pink-600 dark:text-pink-300 hover:underline whitespace-nowrap"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-white/60 dark:bg-purple-500/15 text-purple-700 dark:text-purple-200 px-2 py-0.5 rounded font-mono border border-purple-200/50 dark:border-purple-400/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}
    </main>
  )
}
