import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-cyan-400/10 bg-[#050816] px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <h3 className="text-center text-2xl font-bold text-white">
          Bui Le Tuan Kiet
        </h3>

        <p className="mt-2 text-center text-slate-400">
          Frontend Developer
        </p>

        <div className="my-8 flex justify-center gap-8 text-2xl">

          <a
            href="https://github.com/tunakiet-29"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition duration-300 hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/tunakiet"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition duration-300 hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ktuna.silver@email.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition duration-300 hover:text-cyan-400"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-center text-sm text-slate-500">
          © 2026 Bui Le Tuan Kiet. Built with React & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}

export default Footer;