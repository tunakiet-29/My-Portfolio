function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="mb-4 text-center text-4xl font-bold text-white lg:text-5xl">
          Let's Work Together
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center leading-8 text-slate-400">
          I'm currently looking for a Frontend Developer Internship.
          Feel free to reach out if you have an opportunity or simply
          want to connect.
        </p>

        <div className="space-y-6 rounded-3xl border border-cyan-400/20 bg-slate-900/40 p-10">

          <div className="flex justify-between border-b border-slate-700 pb-4">
            <span className="text-slate-400">Email</span>
            <span className="text-white">
              ktuna.silver@email.com
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-700 pb-4">
            <span className="text-slate-400">Location</span>
            <span className="text-white">
              Ho Chi Minh City, Vietnam
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-700 pb-4">
            <span className="text-slate-400">GitHub</span>

            <a
              href="https://github.com/tunakiet-29"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline"
            >
              github.com/tunakiet-29
            </a>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">LinkedIn</span>

            <a
              href="https://linkedin.com/in/tunakiet"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline"
            >
              linkedin.com/in/tunakiet
            </a>
          </div>

        </div>

        <div className="mt-10 text-center">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ktuna.silver@email.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-900 transition duration-300 hover:bg-cyan-500"
          >
            Send Email
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;