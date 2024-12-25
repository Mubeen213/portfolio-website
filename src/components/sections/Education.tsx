import { Book, Calendar } from 'lucide-react'

interface Education {
  school: string
  degree: string
  period: string
  description?: string
}

const educationData: Education[] = [
  {
    school: 'Mufakkam Jah College Of Engineering And Technology',
    degree: 'B.E in Electronics and Communication',
    period: 'July 2019 – June 2022',
    description:
      'Focus on digital systems, signal processing, and computer architecture.',
  },
]

const Education = () => {
  return (
    <section className={`py-20 bg-gradient-to-b from-white to-gray-50`}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 `}>
        <h2 className='text-3xl font-bold mb-12 flex items-center'>
          <Book className='mr-2' />
          Education
        </h2>

        <div className='space-y-8'>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-white  shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100`}
            >
              <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-4'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    {edu.school}
                  </h3>
                  <p className='text-blue-600'>{edu.degree}</p>
                  {edu.description && (
                    <p className='mt-2 text-gray-600'>{edu.description}</p>
                  )}
                </div>
                <div className='flex items-center text-gray-500'>
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
