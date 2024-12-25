import { Code, Database, Terminal } from 'lucide-react'
import { skillsData } from '../../data/skillsData'

const Skills = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-12 text-gray-900 dark:text-white'>
          Technical Expertise
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <SkillCard
            icon={<Terminal />}
            title='Core Technologies'
            skills={skillsData.core}
          />
          <SkillCard
            icon={<Code />}
            title='Frontend Development'
            skills={skillsData.frontend}
          />
          <SkillCard
            icon={<Database />}
            title='Backend & Infrastructure'
            skills={skillsData.backend}
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
  <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300'>
    <div className='flex items-center mb-6'>
      <span className='text-blue-600 dark:text-blue-400'>{icon}</span>
      <h3 className='text-xl font-bold ml-2 text-gray-900 dark:text-white'>
        {title}
      </h3>
    </div>
    <div className='flex flex-wrap gap-2'>
      {skills.map((skill) => (
        <span
          key={skill}
          className='px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm'
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
)

export default Skills
