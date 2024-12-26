import { Server, Github, ExternalLink } from 'lucide-react'
import { projects } from '../../data/projects'
import { Project } from '@/types'

const Projects = () => {
  return (
    <section
      id='projects'
      className='py-10 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-12 flex items-center'>
          <Server className='mr-2' />
          Featured Projects
        </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className='group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all p-6'>
    <div className='flex justify-between items-start mb-4'>
      <h3 className='text-2xl font-bold text-white group-hover:text-blue-400 transition-colors'>
        {project.title}
      </h3>
      <div className='flex gap-4'>
        {project.github && (
          <a
            href={project.github}
            className='text-gray-400 hover:text-blue-400 transition-colors'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={20} />
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            className='text-gray-400 hover:text-blue-400 transition-colors'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Visit ${project.title} website`}
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
    <p className='text-gray-300 mb-6 '>{project.description}</p>
    <div className='flex flex-wrap gap-2'>
      {project.tech.map((tech) => (
        <span
          key={tech}
          className='px-3 py-1 bg-white/5 text-blue-200 rounded-full text-sm border border-white/10'
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)

export default Projects
