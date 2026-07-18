import heroImg from '../assets/images/avatar.jpg'

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-[#050816] pt-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">

        {/* Left side */}
        <div>
          <p className="mb-4 text-lg text-cyan-300">
            Hello, I'm
          </p>

          <h1 className="mb-4 text-5xl font-bold leading-tight text-white lg:text-7xl">
            Kiet
          </h1>

          <h2 className="mb-6 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent lg:text-5xl">
            Frontend Developer
          </h2>

          <p className="max-w-xl text-lg leading-8 text-slate-400">
            I build modern, responsive and user-friendly web applications
            using React, Tailwind CSS, and JavaScript.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3 font-medium text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-cyan-400 px-7 py-3 font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex justify-center lg:translate-x-20">
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-3xl"></div>

            {/* Avatar */}
            <img
              src={heroImg}
              alt="Profile Avatar"
              className="relative h-80 w-80 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_60px_rgba(34,211,238,.35)] lg:h-96 lg:w-96"
            />

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;