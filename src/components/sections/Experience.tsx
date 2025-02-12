import { Briefcase } from 'lucide-react'
import { experiences } from '../../data/experiences'

const Experience = () => {
  return (
    <section
      id='experience'
      className='py-10 bg-gradient-to-b from-purple-900 to-slate-900 text-white'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-12 flex items-center'>
          <Briefcase className='mr-2' />
          Professional Experience
        </h2>
        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-0 sm:left-1/2 h-full w-0.5 bg-white/10 transform -translate-x-1/2' />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col sm:flex-row ${
                index % 2 === 0 ? 'sm:pr-1/2' : 'sm:pl-1/2 sm:ml-auto'
              }`}
            >
              <div className='relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all w-full sm:w-[calc(100%-2rem)]'>
                <div className='flex justify-between items-start mb-4'>
                  <div>
                    <h3 className='text-xl font-bold text-white'>
                      {exp.company}
                    </h3>
                    <p className='text-blue-300 font-medium'>{exp.role}</p>
                    <p className='text-sm text-gray-400'>{exp.location}</p>
                  </div>
                  <span className='text-sm text-gray-400'>{exp.period}</span>
                </div>
                <ul className='space-y-3'>
                  {exp.points.map((point, i) => (
                    <li key={i} className='flex items-start'>
                      <span className='h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 mr-2 flex-shrink-0' />
                      <span className='text-gray-300'>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-white/5 text-blue-200 rounded-full text-sm border border-white/10'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
