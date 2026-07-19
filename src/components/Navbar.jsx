import {useState} from "react";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className="fixed top-0 left-0 z-50 w-full border-b border-cyan-500/20 bg-[#050816]/80 backdrop-blur-lg">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
                <a
                href="#home"
                className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-2xl font-bold text-transparent"
                >Kiet.</a>
            
            <nav className="hidden md:block">
                <ul className=" flex items-center gap-10 text-md font-medium text-slate-300">
                    <li>
                        <a 
                        href="#home"
                        className="transition-all duration-300 hover:text-cyan-400"
                        >Home</a>
                    </li>

                    <li>
                        <a 
                        href="#about"
                        className="transition-all duration-300 hover:text-cyan-400"
                        >About</a>
                    </li>
                    <li>
                        <a 
                        href="#skills"
                        className="transition-all duration-300 hover:text-cyan-400"
                        >Skills</a>
                    </li>
                    <li>
                        <a 
                        href="#projects"
                        className="transition-all duration-300 hover:text-cyan-400"
                        >Projects</a>
                    </li>
                    <li>
                        <a 
                        href="#contact"
                        className="transition-all duration-300 hover:text-cyan-400"
                        >Contact</a>
                    </li> 
                    
                </ul>
            </nav>

            <button
              onClick = {()=>setIsOpen(!isOpen)}
              className= "text-3xl text-cyan-400 md:hidden"
            >
            {isOpen ? "X" : "☰"}
            </button>

        </div>

        {/* Mobile menu */}

        {isOpen && (
            <nav className="border-t border-cyan-500/20 bg-[#050816] md:hidden">
                <ul className="flex flex-col items-center gap-6 py-6 text-lg text-slate-300">
                    <li>
                        <a href="#home" onClick={()=>setIsOpen()}>Home</a>
                    </li>

                    <li>
                        <a href="#about" onClick={()=>setIsOpen()}>About</a>
                    </li>

                    <li>
                        <a href="#skills" onClick={()=>setIsOpen()}>Skills</a>
                    </li>

                    <li>
                        <a href="#projects" onClick={()=>setIsOpen()}>Projects</a>
                    </li>

                    <li>
                        <a href="#contact" onClick={()=>setIsOpen()}>Contact</a>
                    </li>
                </ul>
                
            </nav>
        )}

        </header>
    )
}
export default Navbar