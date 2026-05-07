import '@/i18n/index';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        {/* <div className="section-divider" /> */}
        <Education />
        {/* <div className="section-divider" /> */}
        <Projects />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
