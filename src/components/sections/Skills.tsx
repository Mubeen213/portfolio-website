import { Code, Database, Terminal } from 'lucide-react'

const Skills = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-gray-50 to-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-12 flex items-center'>
          <Code className='mr-2' />
          Technical Expertise
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <SkillCard
            icon={<Terminal className='w-6 h-6 text-blue-600' />}
            title='Languages'
            skills={['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL']}
          />
          <SkillCard
            icon={<Code className='w-6 h-6 text-blue-600' />}
            title='Frontend'
            skills={['React', 'Next.js', 'TailwindCSS', 'Redux', 'GraphQL']}
          />
          <SkillCard
            icon={<Database className='w-6 h-6 text-blue-600' />}
            title='Backend & DevOps'
            skills={['Spring Boot', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']}
          />
        </div>
      </div>
    </section>
  )
}

const SkillCard = ({ icon, title, skills }: any) => (
  <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100'>
    <div className='flex items-center mb-4'>
      {icon}
      <h3 className='text-xl font-bold ml-2'>{title}</h3>
    </div>
    <div className='flex flex-wrap gap-2'>
      {skills.map((skill: string) => (
        <span
          key={skill}
          className='px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm'
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
)

export default Skills
