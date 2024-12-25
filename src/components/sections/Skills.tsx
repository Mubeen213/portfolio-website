import { Code, Library, Wrench } from 'lucide-react'
import { skillsData } from '../../data/skillsData'

const Skills = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-slate-900 to-purple-900 text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-12 flex items-center'>
          <Code className='mr-2' />
          Technical Expertise
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <SkillCard
            icon={<Code className='w-5 h-5' />}
            title='Languages'
            skills={skillsData.languages}
          />
          <SkillCard
            icon={<Library className='w-5 h-5' />}
            title='Frameworks & Libraries'
            skills={skillsData.frameworks}
          />
          <SkillCard
            icon={<Wrench className='w-5 h-5' />}
            title='Tools & Technologies'
            skills={skillsData.tools}
          />
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  skills: string[]
}

const SkillCard = ({ icon, title, skills }: SkillCardProps) => (
  <div className='bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all'>
    <div className='flex items-center mb-6'>
      <span className='text-blue-400'>{icon}</span>
      <h3 className='text-xl font-bold ml-2 text-white'>{title}</h3>
    </div>
    <div className='flex flex-wrap gap-2'>
      {skills.map((skill) => (
        <span
          key={skill}
          className='px-3 py-1 bg-white/5 text-blue-200 rounded-full text-sm border border-white/10'
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
)

export default Skills
