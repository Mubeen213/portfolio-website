import { Book, Calendar, MapPin } from 'lucide-react'
import { educationData } from '../../data/education'

const Education = () => {
  return (
    <section
      id='education'
      className='py-10 bg-gradient-to-b from-slate-900 to-purple-900 text-white'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-12 flex items-center'>
          <Book className='mr-2' />
          Education
        </h2>

        <div className='space-y-8'>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className='bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all'
            >
              <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-4'>
                <div>
                  <h3 className='text-xl font-bold text-white'>{edu.school}</h3>
                  <p className='text-blue-300'>{edu.degree}</p>
                  <div className='flex items-center mt-2 text-gray-400'>
                    <MapPin className='w-4 h-4 mr-2' />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <div className='flex items-center text-gray-400'>
                  <Calendar className='w-4 h-4 mr-2' />
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
