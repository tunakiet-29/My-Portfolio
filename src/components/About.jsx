function About() {
  return (
    <section id="about" className="bg-[#050816] px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>

        <h2 className="mb-10 text-center text-4xl font-bold text-white lg:text-5xl">
          Who I Am
        </h2>

        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-center text-lg leading-8 text-slate-400">
            I'm an aspiring Frontend Developer passionate about building
            modern, responsive, and user-friendly web applications. I enjoy
            transforming ideas into clean and interactive user experiences.
          </p>

          <p className="text-center text-lg leading-8 text-slate-400">
            Currently, I'm strengthening my React ecosystem knowledge,
            improving my JavaScript skills, and building real-world projects
            while preparing for a Frontend Developer Internship.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">

          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
            <h3 className="mb-2 text-lg font-semibold text-white">
               Career Goal
            </h3>

            <p className="leading-7 text-slate-400">
              Frontend Developer Intern
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
            <h3 className="mb-2 text-lg font-semibold text-white">
               Education
            </h3>

            <p className="leading-7 text-slate-400">
              University of Economics Ho Chi Minh City
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
            <h3 className="mb-2 text-lg font-semibold text-white">
               Location
            </h3>

            <p className="leading-7 text-slate-400">
              Ho Chi Minh City, Vietnam
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
            <h3 className="mb-2 text-lg font-semibold text-white">
              
               Currently Learning
            </h3>

            <p className="leading-7 text-slate-400">
              React • Tailwind CSS • Frontend Best Practices
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;