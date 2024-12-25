import { Server, ExternalLink } from 'lucide-react'
import Badge from '../ui/Badge'

const Projects = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-white to-gray-50'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-12 flex items-center'>
          <Server className='mr-2' />
          Featured Projects
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Project Card */}
          <div className='group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border border-gray-100'>
            <div className='flex justify-between items-start mb-4'>
              <h3 className='text-2xl font-bold group-hover:text-blue-600 transition-colors'>
                NikahHub
              </h3>
              <a
                href='https://nikahhub.org/'
                className='text-gray-400 hover:text-gray-600'
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <p className='text-gray-600 mb-4'>
              A modern matchmaking platform built with enterprise-grade security
              and scalability
            </p>
            <div className='space-y-4'>
              <div className='flex flex-wrap gap-2'>
                {['Spring Boot', 'React', 'AWS'].map((tech) => (
                  <Badge key={tech} text={tech} />
                ))}
              </div>
            </div>
          </div>
          {/* Add more project cards here */}
        </div>
      </div>
    </section>
  )
}

export default Projects
