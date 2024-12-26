import Hero from '../components/sections/Hero'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Education from '../components/sections/Education'

export const Portfolio = () => {
  return (
    <div className='min-h-screen bg-slate-900'>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </div>
  )
}
