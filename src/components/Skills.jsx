import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt} from 'react-icons/fa';
import {SiTailwindcss, SiVite, SiGithub} from 'react-icons/si';

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: SiGithub },
      { name: "Vite", icon: SiVite },
    ],
  },
];

function Skills(){
    return(
        <section 
        id="skills"
        className="bg-[#050816] px-6 py-24">
            <div className="mx-auto max-w-6xl">

                <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.3rem] text-cyan-400">Skills</p>

                <h2 className="mb-4 text-center text-4xl font-bold text-white lg:text-5xl">My Tech Stack</h2>
                
                <p className="mx-auto mb-14 max-w-2xl text-center leading-8 text-slate-400">Technologies and tools I use to build responsive, modern and user-friendly web applications.</p>

                <div className="space-y-4">
                    {skillGroups.map((group) => (
                        <div 
                        key={group.title}>
                            <h3 className="mb-8 text-2xl font-semibold text-cyan-400">
                                {group.title}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                                {group.skills.map((skill)=> {
                                    const Icon = skill.icon;
                                    return(
                                        <div 
                                           key={skill.name}
                                           className="flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2">

                                            <Icon className="text-6xl text-slate-400" />
                                            <span className="text-gray-300">{skill.name}</span>
                                        </div>
                                    )
    })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;