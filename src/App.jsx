import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'


function App() {
  return (
   <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;