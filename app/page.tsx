import { resume } from '../.velite'
export default function HomePage() {
  // If Velite isn't working, this page will crash saying 'resume is undefined'
  // If it works, you'll see your JSON data rendered beautifully!

  return (
    <main className="max-w-2xl mx-auto p-8 mt-12 font-sans">
      {/* HEADER */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">{resume.name}</h1>
        <p className="text-gray-500">{resume.location}</p>
      </header>

      {/* SKILLS SECTION */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {resume.skills.map((skill) => (
            <span 
              key={skill} 
              className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
        <div className="space-y-4">
          {resume.education.map((education) => (
            <div key={education.school}>
              <h3 className="font-semibold text-lg">{education.school}</h3>
              <p className="text-gray-700 dark:text-gray-300">{education.degree}</p>
              {education.honors && (
                <p className="text-sm italic text-gray-500 mt-1">{education.honors}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}