import weatherAppImage from "../assets/images/weather-app.png";
import movieAppImage from "../assets/images/MovieVerse.png"
const projects =[
    {
        title: "Weather App",
        description: "A weather application built with JavaScript that fetches real-time weather data from an external API and displays it to the user.",
        image: weatherAppImage,
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        github: "https://github.com/tunakiet-29/Weather-App",
        demo: "https://weather-app-alpha-seven-59.vercel.app/",
    }, 
    {
        title: "MovieVerse",
        description: "A modern movie discovery web app built with React, Tailwind CSS, and TMDB API to browse trending, popular, top-rated, and upcoming movies.",
        image: movieAppImage,
        technologies: ["React", "Tailwind CSS"],
        github: "https://github.com/tunakiet-29/Movie-App",
        demo: "",
    }
    ]
function Projects(){
    return(
        <section
            id="projects"
            className="mx-auto max-w-6xl">
            <div>
                <p className="mb-3 text-center text-sm text-semibold uppercase tracking-[0.3rem] text-cyan-400">Projects</p>

                <h2 className="mb-4 text-center text-4xl font-bold text-white lg: text-5xl">My Projects</h2>

                <p className="mx-auto mb-14 max-w-2xl text-center leading-8 text-slate-400">Here are some projects I've built while learning Frontend Development. Each project helped me improve my skills in React, JavaScript, APIs, and responsive web design.</p>

                <div className="grid lg: grid-cols-2 gap-10">
                    {projects.map((project)=> (
                        <div 
                        key={project.title}
                        className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/40 transition duration-300 hover:-translate-y-2 hover:bg-cyan-400"
                        >
                            <img 
                               src={project.image}
                               alt={project.title}
                               className="sm:h-60 w-full object-cover h-52"
                            />

                            <div className="p-5 sm:p-7">

                                <h3 className="mb-4 text-2xl font-semibold text-white">{project.title}</h3>

                                <p className="mb-6 leading-8 text-slate-400">{project.description}</p>

                                <div className="flex flex-wrap gap-3 mt-6">
                                    {project.technologies.map((item)=>(
                                        <span 
                                        key={item}
                                        className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">{item}</span>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-4 mt-6 sm:flex-row">
                                    <a
                                       href={project.demo}
                                       target="_blank"
                                       rel="noreferrer"
                                       className="w-full rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-900 transition duration-300 hover:bg-cyan-500 sm:w-auto"
                                    >
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full rounded-full border border-cyan-400 px-6 py-3 font-medium text-cyan-300 transition duration-300 hover:bg-cyan-400 hover:text-slate-900 sm:w-auto"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects;