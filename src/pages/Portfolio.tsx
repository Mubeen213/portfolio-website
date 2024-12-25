import React from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Book,
  Briefcase,
  Code,
  Server,
} from 'lucide-react'

interface ExperienceItem {
  company: string
  role: string
  period: string
  points: string[]
  tech: string[]
}

export const Portfolio = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Redblock',
      role: 'Software Engineer',
      period: 'Nov 2023 - Present',
      points: [
        'Developed Identity Governance Module for SSO provider integration',
        'Implemented threat analysis reports for security enhancement',
        'Created AI agent for automated user offboarding',
        'Designed External API Access Module for third-party integration',
      ],
      tech: ['Java', 'Spring', 'PostgreSQL', 'REST', 'GraphQL', 'DynamoDB'],
    },
    {
      company: 'Quolum Inc',
      role: 'Software Engineer',
      period: 'Jun 2022 - Nov 2023',
      points: [
        'Integrated 25+ third-party applications for usage tracking',
        'Optimized internal crawler framework for data processing',
        'Developed report generators for actionable insights',
        'Improved dashboard performance through code optimization',
      ],
      tech: ['Java', 'React', 'Spring', 'PostgreSQL', 'GraphQL', 'DynamoDB'],
    },
  ]

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <header className='bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
        <div className='container mx-auto px-6 py-24'>
          <h1 className='text-4xl font-bold mb-4'>Md Mubeen</h1>
          <h2 className='text-2xl mb-6'>Full Stack Engineer</h2>
          <p className='text-xl mb-8'>
            Crafting secure, scalable solutions with modern technologies.
            Specialized in identity management and system optimization.
          </p>
          <div className='flex space-x-6'>
            <a
              href='mailto:mdmubeen1307@gmail.com'
              className='flex items-center space-x-2 hover:text-blue-200'
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href='tel:7097008749'
              className='flex items-center space-x-2 hover:text-blue-200'
            >
              <Phone size={20} />
              <span>Phone</span>
            </a>
            <a
              href='https://github.com/Mubeen'
              className='flex items-center space-x-2 hover:text-blue-200'
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href='https://linkedin.com/in/mubeen'
              className='flex items-center space-x-2 hover:text-blue-200'
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-8 flex items-center'>
            <Code className='mr-2' />
            Technical Expertise
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='p-6 bg-gray-50 rounded-lg'>
              <h3 className='font-bold mb-4'>Languages</h3>
              <div className='flex flex-wrap gap-2'>
                {[
                  'Java',
                  'C++',
                  'JavaScript',
                  'TypeScript',
                  'HTML',
                  'CSS',
                  'SQL',
                ].map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className='p-6 bg-gray-50 rounded-lg'>
              <h3 className='font-bold mb-4'>Frameworks & Libraries</h3>
              <div className='flex flex-wrap gap-2'>
                {['React', 'Spring', 'TailwindCSS', 'Node.js'].map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className='p-6 bg-gray-50 rounded-lg'>
              <h3 className='font-bold mb-4'>Tools & Technologies</h3>
              <div className='flex flex-wrap gap-2'>
                {[
                  'Git',
                  'AWS',
                  'Postman',
                  'REST',
                  'GraphQL',
                  'DynamoDB',
                  'PostgreSQL',
                ].map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-8 flex items-center'>
            <Briefcase className='mr-2' />
            Professional Experience
          </h2>
          <div className='space-y-8'>
            {experiences.map((exp, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-sm'>
                <div className='flex justify-between items-start mb-4'>
                  <div>
                    <h3 className='text-xl font-bold'>{exp.company}</h3>
                    <p className='text-gray-600'>{exp.role}</p>
                  </div>
                  <span className='text-gray-500'>{exp.period}</span>
                </div>
                <ul className='list-disc list-inside mb-4 space-y-2'>
                  {exp.points.map((point, i) => (
                    <li key={i} className='text-gray-700'>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className='flex flex-wrap gap-2'>
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-8 flex items-center'>
            <Server className='mr-2' />
            Featured Project
          </h2>
          <div className='bg-gray-50 p-8 rounded-lg'>
            <div className='flex justify-between items-start mb-4'>
              <h3 className='text-2xl font-bold'>NikahHub Web Application</h3>
              <span className='text-gray-500'>2024</span>
            </div>
            <ul className='list-disc list-inside mb-6 space-y-3'>
              <li className='text-gray-700'>
                Built scalable matchmaking platform with Spring Boot and React
              </li>
              <li className='text-gray-700'>
                Implemented secure authentication using OAuth2 and Firebase
              </li>
              <li className='text-gray-700'>
                Deployed on AWS using EC2, S3, CloudFront, and Route 53
              </li>
            </ul>
            <div className='flex flex-wrap gap-2'>
              {[
                'Spring Boot',
                'React',
                'PostgreSQL',
                'AWS',
                'OAuth2',
                'Firebase',
                'TailwindCSS',
              ].map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold mb-8 flex items-center'>
            <Book className='mr-2' />
            Education
          </h2>
          <div className='space-y-6'>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
              <h3 className='text-xl font-bold'>
                Mufakkam Jah College Of Engineering And Technology
              </h3>
              <p className='text-gray-600'>
                B.E in Electronics and Communication
              </p>
              <p className='text-gray-500'>July 2019 – June 2022</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
