import { useState } from 'react'
import { Server, Github, ExternalLink } from 'lucide-react'
import { projects } from '../../data/projects'
import { Project } from '@/types'

const Projects = () => {
  const [filter, setFilter] = useState<string>('all')

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-8 flex items-center'>
          <Server className='mr-2' />
          Featured Projects
        </h2>

        <div className='flex gap-4 mb-8'>
          {['all', 'frontend', 'backend', 'fullstack'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className='group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100'>
    <div className='flex justify-between items-start mb-4'>
      <h3 className='text-2xl font-bold group-hover:text-blue-600'>
        {project.title}
      </h3>
      <div className='flex gap-4'>
        {project.github && (
          <a
            href={project.github}
            className='text-gray-400 hover:text-gray-600'
          >
            <Github size={20} />
          </a>
        )}
        {project.link && (
          <a href={project.link} className='text-gray-400 hover:text-gray-600'>
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
    <p className='text-gray-600 mb-4'>{project.description}</p>
    <div className='flex flex-wrap gap-2'>
      {project.tech.map((tech) => (
        <span
          key={tech}
          className='px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm'
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)

export default Projects
